/* js/components/ScannerViewer.js */
(function () {
    class ScannerViewer {
        constructor(containerId) {
            this.container = document.getElementById(containerId);
            if (!this.container) return;

            this.bgImage = null;
            this.lensImage = null;
            this.lensRing = null;

            this.init();
        }

        init() {
            this.container.classList.add('scanner-container');
            this.container.style.position = 'relative';
            this.container.style.overflow = 'hidden';
            this.container.style.background = 'radial-gradient(circle at center, #0a1520 0%, #000000 100%)';
            this.container.style.cursor = 'crosshair';

            // Events
            this.container.addEventListener('mousemove', this.onMove.bind(this));
            this.container.addEventListener('touchmove', this.onMove.bind(this));
        }

        loadResource(imageUrl, fallbackImage, color = '#4facfe') {
            this.container.innerHTML = ''; // Clear previous

            // Use fallback image if modelUrl (imageUrl) is empty or a 3D file path
            // The logic from AnatomyViewer passes (model, image, color)
            // If model is null/empty, we want the image. 
            // AnatomyViewer usually calls loadResource(model, image, color).
            // We should use 'fallbackImage' (the 2D svg) as the primary source here.

            const targetImage = fallbackImage || imageUrl;

            if (!targetImage || targetImage.endsWith('.glb')) {
                // Should not happen if AnatomyViewer passes correct args, but safety check
                return;
            }

            // 1. Grid Overlay (Tech feel)
            this.createGrid();

            // 2. Background Layer (The "Blueprint")
            this.bgImage = document.createElement('img');
            this.bgImage.src = targetImage;
            this.bgImage.className = 'scanner-layer bg';
            this.applyBaseStyles(this.bgImage);
            // Blueprint effect
            this.bgImage.style.filter = `grayscale(100%) opacity(0.3) blur(1px) drop-shadow(0 0 10px ${color})`;
            this.container.appendChild(this.bgImage);

            // 3. Foreground Layer (The "X-Ray Reveal")
            this.lensImage = document.createElement('img');
            this.lensImage.src = targetImage;
            this.lensImage.className = 'scanner-layer fg';
            this.applyBaseStyles(this.lensImage);
            this.lensImage.style.filter = `contrast(1.2) drop-shadow(0 0 15px ${color})`;
            this.lensImage.style.clipPath = 'circle(0px at 50% 50%)'; // Hidden initially
            // Transition only opacity/smooth movement, but clip-path needs to be fast for mouse tracking
            this.lensImage.style.willChange = 'clip-path';

            this.lensImage.onload = () => {
                // Pulse effect on load
                this.updateFocus(this.container.clientWidth / 2, this.container.clientHeight / 3);
                this.lensRing.style.opacity = '1';
                // Animating clip-path for entrance
                this.lensImage.style.transition = 'clip-path 1s ease-out';
                this.lensImage.style.clipPath = `circle(100px at 50% 33%)`;

                // Remove transition after entrance for instant tracking
                setTimeout(() => {
                    this.lensImage.style.transition = 'none';
                }, 1000);
            };
            this.container.appendChild(this.lensImage);

            // 4. The Lens UI (Visual ring)
            this.lensRing = document.createElement('div');
            this.lensRing.className = 'scanner-lens';
            this.lensRing.style.position = 'absolute';
            this.lensRing.style.width = '200px';
            this.lensRing.style.height = '200px';
            this.lensRing.style.border = `2px solid ${color}`;
            this.lensRing.style.borderRadius = '50%';
            this.lensRing.style.transform = 'translate(-50%, -50%)';
            this.lensRing.style.boxShadow = `0 0 20px ${color}, inset 0 0 10px ${color}`;
            this.lensRing.style.pointerEvents = 'none';
            this.lensRing.style.opacity = '0';
            this.lensRing.style.transition = 'opacity 0.3s ease'; // Only opacity
            this.container.appendChild(this.lensRing);

            // 5. Scanning Beam
            this.createScanBeam(color);

            // 6. Instructions
            const tip = document.createElement('div');
            tip.innerText = 'HOVER TO SCAN';
            tip.style.position = 'absolute';
            tip.style.bottom = '20px';
            tip.style.width = '100%';
            tip.style.textAlign = 'center';
            tip.style.color = color;
            tip.style.fontFamily = 'monospace';
            tip.style.letterSpacing = '4px';
            tip.style.opacity = '0.7';
            tip.style.pointerEvents = 'none';
            this.container.appendChild(tip);
        }

        createGrid() {
            const grid = document.createElement('div');
            Object.assign(grid.style, {
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px', opacity: '0.3', pointerEvents: 'none'
            });
            this.container.appendChild(grid);
        }

        createScanBeam(color) {
            const beam = document.createElement('div');
            Object.assign(beam.style, {
                position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                background: color, boxShadow: `0 0 15px ${color}`, opacity: '0.5',
                pointerEvents: 'none', animation: 'scannerMove 3s ease-in-out infinite'
            });

            if (!document.getElementById('scanner-keyframes')) {
                const style = document.createElement('style');
                style.id = 'scanner-keyframes';
                style.innerHTML = `@keyframes scannerMove { 0% { top: 10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 90%; opacity: 0; } }`;
                document.head.appendChild(style);
            }
            this.container.appendChild(beam);
        }

        applyBaseStyles(el) {
            Object.assign(el.style, {
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)', maxHeight: '90%', maxWidth: '90%'
            });
        }

        onMove(e) {
            e.preventDefault();
            const rect = this.container.getBoundingClientRect();
            let clientX, clientY;

            if (e.touches && e.touches[0]) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            const x = clientX - rect.left;
            const y = clientY - rect.top;
            this.updateFocus(x, y);
        }

        updateFocus(x, y) {
            if (!this.lensImage || !this.lensRing) return;

            // Update Ring (UI)
            this.lensRing.style.left = x + 'px';
            this.lensRing.style.top = y + 'px';
            this.lensRing.style.opacity = '1';

            // Calculate Clip Path Relative to Image
            // The image is centered. 
            // Visual Left = (ContainerW - ImageW) / 2
            // Visual Top = (ContainerH - ImageH) / 2

            const imgW = this.lensImage.offsetWidth;
            const imgH = this.lensImage.offsetHeight;
            const conW = this.container.clientWidth;
            const conH = this.container.clientHeight;

            const visualLeft = (conW - imgW) / 2;
            const visualTop = (conH - imgH) / 2;

            const relX = x - visualLeft;
            const relY = y - visualTop;

            this.lensImage.style.clipPath = `circle(100px at ${relX}px ${relY}px)`;
        }

        destroy() {
            this.container.innerHTML = '';
            // Listeners are garbage collected if node removed usually, but explicit removal is cleaner
            // window.removeEventListener... but here we attached to container.
        }
    }

    window.ScannerViewer = ScannerViewer;
})();
