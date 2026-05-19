/* js/components/KnowledgeMap.js */
(function () {
    // Placeholder Data
    const systemsData = {
        skeletal: { id: 'skeletal', labelKey: 'system.skeletal.title', progress: 62, status: 'developing', achKeys: ['map.ach.skeletal.1', 'map.ach.skeletal.2'], recKey: 'map.rec.skeletal' },
        muscular: { id: 'muscular', labelKey: 'system.muscular.title', progress: 48, status: 'weak', achKeys: ['map.ach.muscular.1'], recKey: 'map.rec.muscular' },
        nervous: { id: 'nervous', labelKey: 'system.nervous.title', progress: 85, status: 'good', achKeys: ['map.ach.nervous.1', 'map.ach.nervous.2'], recKey: 'map.rec.nervous' },
        cardiovascular: { id: 'cardiovascular', labelKey: 'system.cardiovascular.title', progress: 72, status: 'good', achKeys: ['map.ach.cardio.1', 'map.ach.cardio.2'], recKey: 'map.rec.cardio' },
        respiratory: { id: 'respiratory', labelKey: 'system.respiratory.title', progress: 91, status: 'mastered', achKeys: ['map.ach.resp.1', 'map.ach.resp.2'], recKey: 'map.rec.resp' },
        digestive: { id: 'digestive', labelKey: 'system.digestive.title', progress: 55, status: 'developing', achKeys: ['map.ach.digestive.1'], recKey: 'map.rec.digestive' },
        endocrine: { id: 'endocrine', labelKey: 'system.endocrine.title', progress: 40, status: 'weak', achKeys: [], recKey: 'map.rec.endocrine' },
        immune: { id: 'immune', labelKey: 'system.immune.title', progress: 65, status: 'developing', achKeys: ['map.ach.immune.1'], recKey: 'map.rec.immune' },
        urinary: { id: 'urinary', labelKey: 'system.urinary.title', progress: 78, status: 'good', achKeys: ['map.ach.urinary.1'], recKey: 'map.rec.urinary' },
        reproductive: { id: 'reproductive', labelKey: 'system.reproductive.title', progress: 30, status: 'weak', achKeys: [], recKey: 'map.rec.reproductive' },
        integumentary: { id: 'integumentary', labelKey: 'system.integumentary.title', progress: 88, status: 'mastered', achKeys: ['map.ach.integumentary.1'], recKey: 'map.rec.integumentary' }
    };

    const statusColors = {
        weak: 'var(--error, #ff3b30)',
        developing: 'var(--warning, #ff9500)',
        good: 'var(--info, #007aff)',
        mastered: 'var(--success, #34c759)'
    };

    window.initKnowledgeMap = function () {
        const mapRoot = document.getElementById('knowledge-map-root');
        if (!mapRoot) return;

        // Clear previous
        mapRoot.innerHTML = '';

        const width = window.innerWidth;

        // 1. Mobile (< 768px)
        if (width < 768) {
            renderMobileFallback(mapRoot);
            return;
        }

        // 2. Tablet (768px - 1023px)
        if (width >= 768 && width < 1024) {
            renderTabletFallback(mapRoot);
            return;
        }

        // 3. Desktop (>= 1024px) - Render Full Map
        // Add SVG Layer for connections
        const svgLayer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgLayer.classList.add('map-connections-svg');
        mapRoot.appendChild(svgLayer);

        renderNodes(mapRoot, svgLayer);
    };

    function renderMobileFallback(root) {
        const card = document.createElement('div');
        card.className = 'map-fallback-card mobile';
        card.innerHTML = `
            <div class="fallback-content">
                <div class="fallback-icon">📱</div>
                <h3 data-i18n="map.mobile.title">AI Learning Insights</h3>
                <p data-i18n="map.mobile.desc">Your detailed learning map is available on desktop devices for optimal visualization.</p>
                <button class="btn btn-sm btn-primary" onclick="window.navigate('learn')" data-i18n="map.mobile.btn">Continue Learning</button>
            </div>
        `;
        root.appendChild(card);
    }

    function renderTabletFallback(root) {
        const card = document.createElement('div');
        card.className = 'map-fallback-card tablet';
        card.innerHTML = `
            <div class="fallback-content">
                <div class="fallback-icon">💻</div>
                <h3 data-i18n="map.tablet.title">Knowledge Map Available on Desktop</h3>
                <p data-i18n="map.tablet.desc">For full visual analytics, open Syntara AI on a laptop or desktop device.</p>
            </div>
        `;
        root.appendChild(card);
    }

    function renderNodes(root, svg) {
        const systemKeys = Object.keys(systemsData);
        const count = systemKeys.length;

        // Use client dimensions
        const width = root.clientWidth || 600;
        const height = root.clientHeight || 600;

        // Elliptical Radius
        // Use 35% of the dimensions to keep some margin
        const radiusX = width * 0.35;
        const radiusY = height * 0.38; // Slightly larger vertically if possible, or 0.35

        const centerX = width / 2;
        const centerY = height / 2;

        // Central "Body" Node
        createNode(root, { id: 'core', labelKey: 'hero.title', progress: 65, status: 'good' }, 50, 50, true);

        systemKeys.forEach((key, index) => {
            const data = systemsData[key];
            const angle = (index / count) * 2 * Math.PI - (Math.PI / 2); // Start from top

            // Calculate position in PIXELS (Elliptical)
            const xPx = centerX + (radiusX * Math.cos(angle));
            const yPx = centerY + (radiusY * Math.sin(angle));

            // Convert back to % for responsive scaling
            const xPct = (xPx / width) * 100;
            const yPct = (yPx / height) * 100;

            const node = createNode(root, data, xPct, yPct);

            // Draw connection to center
            drawConnection(svg, 50, 50, xPct, yPct);

            // Add click listener
            node.addEventListener('click', () => {
                // Deactivate others
                document.querySelectorAll('.map-node').forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                updateSidePanel(data);
            });
        });
    }

    // Add resize listener to re-render layout
    window.addEventListener('resize', debounce(() => {
        if (window.initKnowledgeMap) window.initKnowledgeMap();
    }, 200));

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function createNode(root, data, x, y, isCore = false) {
        const node = document.createElement('div');
        node.classList.add('map-node', data.status);
        if (isCore) node.classList.add('core-node');

        // Position
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;

        // Content
        // node.innerHTML = ``; // Secure way below

        const label = document.createElement('div');
        label.classList.add('node-label');
        if (data.labelKey) {
            label.setAttribute('data-i18n', data.labelKey);
            if (window.i18n && window.i18n.t) {
                label.innerHTML = window.i18n.t(data.labelKey);
            } else {
                label.textContent = data.labelKey;
            }
        } else {
            label.textContent = data.label || 'Unknown';
        }

        const progress = document.createElement('div');
        progress.classList.add('node-progress');
        progress.textContent = `${data.progress}%`;

        node.appendChild(label);
        node.appendChild(progress);

        root.appendChild(node);
        return node;
    }

    function drawConnection(svg, x1, y1, x2, y2) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", `${x1}%`);
        line.setAttribute("y1", `${y1}%`);
        line.setAttribute("x2", `${x2}%`);
        line.setAttribute("y2", `${y2}%`);
        line.classList.add('connection-line');
        svg.appendChild(line);
    }

    function updateSidePanel(data) {
        const panel = document.getElementById('map-details-panel');
        const content = panel.querySelector('.panel-content');
        const placeholder = panel.querySelector('.panel-placeholder');

        placeholder.style.display = 'none';
        content.style.display = 'block';

        // Update Fields
        const titleEl = document.getElementById('panel-title');
        if (data.labelKey) {
            titleEl.setAttribute('data-i18n', data.labelKey);
            if (window.i18n && window.i18n.t) {
                titleEl.innerHTML = window.i18n.t(data.labelKey);
            } else {
                titleEl.textContent = data.labelKey;
            }
        } else {
            titleEl.removeAttribute('data-i18n');
            titleEl.textContent = data.label || 'System';
        }
        const progressEl = document.getElementById('panel-progress');
        progressEl.textContent = `${data.progress}%`;
        progressEl.style.color = statusColors[data.status] || '#fff';

        const statusBadge = document.getElementById('panel-status');
        const statusKey = `map.${data.status}`; // map.weak, map.good, etc.
        if (window.i18n && window.i18n.t) {
            statusBadge.textContent = window.i18n.t(statusKey).toUpperCase();
        } else {
            statusBadge.textContent = data.status.toUpperCase();
        }
        statusBadge.style.color = statusColors[data.status] || '#fff';
        statusBadge.style.borderColor = statusColors[data.status] || '#fff';
        statusBadge.style.border = '1px solid';

        // Achievements
        const achList = document.getElementById('panel-achievements');
        achList.innerHTML = '';
        if (data.achKeys && data.achKeys.length > 0) {
            data.achKeys.forEach(key => {
                const li = document.createElement('li');
                const text = window.i18n && window.i18n.t ? window.i18n.t(key) : key;
                li.textContent = `🏆 ${text}`;
                achList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.setAttribute('data-i18n', 'map.achievements.empty');
            li.textContent = window.i18n && window.i18n.t ? window.i18n.t('map.achievements.empty') : 'No achievements yet';
            li.style.opacity = 0.5;
            achList.appendChild(li);
        }

        // Recommendation
        const recText = window.i18n && window.i18n.t ? window.i18n.t(data.recKey) : data.recKey;
        const recLabel = window.i18n && window.i18n.t ? window.i18n.t('map.recommended') : 'Recommendation';
        const startBtnText = window.i18n && window.i18n.t ? window.i18n.t('map.btn.start') : 'Start Now';

        const recCard = document.getElementById('panel-recommendation');
        recCard.innerHTML = `
            <div style="margin-bottom:5px;">💡 <span data-i18n="map.recommended">${recLabel}</span>:</div>
            <strong data-i18n="${data.recKey}">${recText}</strong>
            <a class="recommendation-action" id="rec-link-action" data-i18n="map.btn.start">${startBtnText} &rarr;</a>
        `;

        // Add Click Listener
        const actionBtn = document.getElementById('rec-link-action');
        if (actionBtn) {
            actionBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // Determine target view based on text content (heuristic)
                // "Quiz" -> learn/quiz
                // "Review" -> learn/explore
                // Determine target view based on text content (heuristic)
                // "Quiz" -> learn/quiz
                // "Review" -> learn/explore

                // For "Start Now", the user explicitly asked to "open the exact section in the Explore Menu part"
                // So we prioritize Explore view for systems.
                // If it's a specific quiz recommendation, we might still want to go there, but let's stick to Explore for now as requested.
                // Actually, let's just go to Explore for ALL system reviews.

                if (window.navigate) {
                    window.navigate('explore');
                }

                // Dispatch event to open the specific system details
                // Small delay to ensure view transition is handled
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('selectSystem', { detail: { systemId: data.id } }));
                }, 100);
            });
        }
    }

    // Attach to window for global access if needed
    window.updateKnowledgeMap = window.initKnowledgeMap;

    // Listen for language changes
    window.addEventListener('languageChanged', () => {
        const panel = document.getElementById('map-details-panel');
        if (panel && panel.style.display !== 'none') {
            // Re-initialize map to update node labels
            window.initKnowledgeMap();
        } else {
            // Just update node labels if panel not open
            window.initKnowledgeMap();
        }
    });

})();
