/* js/components/ThreeViewer.js */
(function () {
    class ThreeViewer {
        constructor(containerId) {
            this.container = document.getElementById(containerId);
            if (!this.container) return;

            this.scene = null;
            this.camera = null;
            this.renderer = null;
            this.controls = null;
            this.model = null;
            this.mixer = null; // For animations
            this.clock = new THREE.Clock();
            this.animationId = null;

            // For Hologram Animation
            this.scanAnimation = null;

            this.init();
        }

        init() {
            // Scene setup
            this.scene = new THREE.Scene();
            // No background color -> transparent, handled by CSS container

            // Camera props
            const width = this.container.clientWidth;
            const height = this.container.clientHeight;
            this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
            this.camera.position.set(0, 1.5, 5);

            // Renderer
            this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            this.renderer.setSize(width, height);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.shadowMap.enabled = true; // Enable shadows
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            this.renderer.outputEncoding = THREE.sRGBEncoding;
            this.container.appendChild(this.renderer.domElement);

            // Controls
            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.enableZoom = true;
            this.controls.minDistance = 2;
            this.controls.maxDistance = 10;
            this.controls.target.set(0, 1, 0);

            // Lights
            this.setupLights();

            // Helpers
            this.setupHelpers();

            // Handle Resize
            window.addEventListener('resize', this.onResize.bind(this));

            // Start Loop
            this.animate();
        }

        setupLights() {
            // Darker, moodier lighting for Holograms
            const ambiLight = new THREE.AmbientLight(0xffffff, 0.2);
            this.scene.add(ambiLight);

            // Point lights for glow
            const pointLight = new THREE.PointLight(0x00d2ff, 1, 20);
            pointLight.position.set(0, 5, 5);
            this.scene.add(pointLight);
        }

        setupHelpers() {
            // Polar Grid for "Tech/Sci-Fi" look - darker
            const radius = 10;
            const sectors = 16;
            const rings = 8;
            const divisions = 64;

            const gridHelper = new THREE.PolarGridHelper(radius, sectors, rings, divisions, 0x1a1a1a, 0x0d0d0d);
            gridHelper.position.y = -0.5; // Lower
            this.scene.add(gridHelper);
        }

        loadResource(modelUrl, fallbackImageUrl, color = 0xffffff) {
            this.clearScene();

            // If explicit model URL exists (and we trust it), try to load it
            if (modelUrl && (modelUrl.startsWith('http') || modelUrl.endsWith('.glb'))) {
                this.showLoading();
                const loader = new THREE.GLTFLoader();

                loader.load(
                    modelUrl,
                    (gltf) => {
                        this.hideLoading();
                        this.model = gltf.scene;

                        // Animations?
                        if (gltf.animations && gltf.animations.length) {
                            this.mixer = new THREE.AnimationMixer(this.model);
                            // Play all
                            gltf.animations.forEach(clip => {
                                this.mixer.clipAction(clip).play();
                            });
                        }

                        // Center and Scale model
                        const box = new THREE.Box3().setFromObject(this.model);
                        const center = box.getCenter(new THREE.Vector3());
                        const size = box.getSize(new THREE.Vector3());

                        const maxDim = Math.max(size.x, size.y, size.z);
                        const scale = 3.5 / maxDim;

                        this.model.scale.set(scale, scale, scale);
                        this.model.position.x = -center.x * scale;
                        this.model.position.y = -box.min.y * scale - 0.5; // Offset for grid
                        this.model.position.z = -center.z * scale;

                        this.scene.add(this.model);
                    },
                    undefined,
                    (error) => {
                        this.hideLoading();
                        console.warn('Model load failed, using Hologram fallback', error);
                        this.createFallback(fallbackImageUrl, color);
                    }
                );
            } else {
                this.createFallback(fallbackImageUrl, color);
            }
        }

        createFallback(imageUrl, colorHex) {
            if (!imageUrl) return;

            // --- HOLOGRAPHIC MODE ---
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(imageUrl, (texture) => {
                const imageAspect = texture.image.width / texture.image.height;
                const width = 3.5;
                const height = 3.5 / imageAspect;

                const group = new THREE.Group();

                // 1. The Main Hologram Plane
                const planeGeometry = new THREE.PlaneGeometry(width, height);
                const planeMaterial = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0.8,
                    side: THREE.DoubleSide,
                    color: colorHex,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false
                });
                const plane = new THREE.Mesh(planeGeometry, planeMaterial);
                group.add(plane);

                // 2. "Glow Bloom" Layer
                const glowPlane = new THREE.Mesh(planeGeometry, planeMaterial.clone());
                glowPlane.material.opacity = 0.3;
                glowPlane.scale.set(1.1, 1.1, 1.1);
                glowPlane.position.z = -0.05;
                group.add(glowPlane);

                // 3. Scanning Line Effect
                const canvas = document.createElement('canvas');
                canvas.width = 128;
                canvas.height = 128;
                const context = canvas.getContext('2d');
                const scanTexture = new THREE.CanvasTexture(canvas);

                const scanMaterial = new THREE.MeshBasicMaterial({
                    map: scanTexture,
                    transparent: true,
                    opacity: 0.6,
                    blending: THREE.AdditiveBlending,
                    color: 0xffffff,
                    side: THREE.DoubleSide,
                    depthWrite: false
                });
                const scanPlane = new THREE.Mesh(planeGeometry, scanMaterial);
                scanPlane.position.z = 0.05;
                group.add(scanPlane);

                // Init Animation State
                this.scanAnimation = {
                    texture: scanTexture,
                    context: context,
                    height: 128
                };

                // 4. Floating 'Data' Particles
                const particleCount = 150;
                const particlesGeom = new THREE.BufferGeometry();
                const particlePositions = new Float32Array(particleCount * 3);

                for (let i = 0; i < particleCount; i++) {
                    particlePositions[i * 3] = (Math.random() - 0.5) * width * 1.8;
                    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * height * 1.2;
                    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
                }

                particlesGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
                const particleMaterial = new THREE.PointsMaterial({
                    color: colorHex,
                    size: 0.05,
                    transparent: true,
                    opacity: 0.6,
                    blending: THREE.AdditiveBlending
                });
                const particleSystem = new THREE.Points(particlesGeom, particleMaterial);
                group.add(particleSystem);

                // 5. Tech Rings
                const ringGeo = new THREE.RingGeometry(1.4, 1.45, 64);
                const ringMat = new THREE.MeshBasicMaterial({
                    color: colorHex,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.3,
                    blending: THREE.AdditiveBlending
                });
                const ring = new THREE.Mesh(ringGeo, ringMat);
                ring.rotation.x = -Math.PI / 2;
                ring.position.y = -height / 2 - 0.4;
                group.add(ring);

                this.model = group;
                this.scene.add(this.model);
            });
        }

        updateScanner() {
            if (this.scanAnimation) {
                const { context, texture, height } = this.scanAnimation;

                // Animate Scan Line
                context.clearRect(0, 0, 128, 128);

                const time = Date.now();
                const progress = (time % 2500) / 2500; // 2.5s loop
                const y = progress * 128;

                const gradient = context.createLinearGradient(0, y - 10, 0, y + 10);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
                gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.9)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                context.fillStyle = gradient;
                context.fillRect(0, 0, 128, 128);

                // Optional: Random glitches
                if (Math.random() > 0.95) {
                    context.fillStyle = `rgba(255,255,255, ${Math.random() * 0.3})`;
                    context.fillRect(0, Math.random() * 128, 128, 2);
                }

                texture.needsUpdate = true;
            }
        }

        showLoading() { }
        hideLoading() { }

        clearScene() {
            if (this.model) {
                this.scene.remove(this.model);
                this.model = null;
            }
            if (this.mixer) {
                this.mixer.stopAllAction();
                this.mixer = null;
            }
            this.scanAnimation = null;
        }

        onResize() {
            if (!this.container) return;
            const width = this.container.clientWidth;
            const height = this.container.clientHeight;

            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        }

        animate() {
            this.animationId = requestAnimationFrame(this.animate.bind(this));

            const delta = this.clock.getDelta();

            if (this.mixer) {
                this.mixer.update(delta);
            }

            // Animate Hologram Scanner
            this.updateScanner();

            // Rotate Hologram slightly
            if (this.model && this.scanAnimation) {
                this.model.rotation.y = Math.sin(Date.now() * 0.0005) * 0.1;
            }

            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        }

        destroy() {
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
            window.removeEventListener('resize', this.onResize.bind(this));
            this.renderer.dispose();
            this.container.innerHTML = '';
        }
    }

    window.ThreeViewer = ThreeViewer;
})();
