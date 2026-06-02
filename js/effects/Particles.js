/* js/effects/Particles.js */
(function () {
    window.initParticles = function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Check if canvas already exists to prevent duplicates (if called multiple times)
        if (container.querySelector('.hero-particles')) return;

        // Create Canvas
        const canvas = document.createElement('canvas');
        canvas.className = 'hero-particles';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none'; // Click through
        canvas.style.opacity = '0.4';

        // Insert behind content but inside hero
        container.insertBefore(canvas, container.firstChild);

        // Context
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // Config
        const particleCount = 60;
        const connectionDistance = 150;

        function initParticlesData() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function resize() {
            const newWidth = container.offsetWidth;
            const newHeight = container.offsetHeight;

            // Only re-init if size actually changed
            if (newWidth !== width || newHeight !== height) {
                width = newWidth;
                height = newHeight;
                canvas.width = width;
                canvas.height = height;

                // If we grew from 0 to something, or just significantly changed, 
                // we should re-distribute particles so they aren't stuck in corner.
                initParticlesData();
            }
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.baseAlpha = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                const isLight = document.body.classList.contains('theme-light');
                const rgb = isLight ? '0, 0, 0' : '255, 255, 255';
                ctx.fillStyle = `rgba(${rgb}, ${this.baseAlpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            resize();
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            animate();
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const isLight = document.body.classList.contains('theme-light');
                        const rgb = isLight ? '0, 0, 0' : '255, 255, 255';
                        ctx.strokeStyle = `rgba(${rgb}, ${1 - dist / connectionDistance * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        }

        // Monitor size changes (handles display:none -> block transitions)
        const observer = new ResizeObserver(() => resize());
        observer.observe(container);

        // window.addEventListener('resize', resize); // Replaced by ResizeObserver
        init();
    };
})();
