/* js/components/KnowledgeMap.js */
(function () {
    // Data dynamically computed
    let systemsData = {};

    const statusColors = {
        weak: 'var(--error, #ff3b30)',
        developing: 'var(--warning, #ff9500)',
        good: 'var(--info, #007aff)',
        mastered: 'var(--success, #34c759)'
    };

    window.initKnowledgeMap = function () {
        const mapRoot = document.getElementById('knowledge-map-root');
        if (!mapRoot) return;

        let activeNodeId = null;
        const currentActive = mapRoot.querySelector('.map-node.active');
        if (currentActive) {
            activeNodeId = currentActive.dataset.id;
        }

        // --- DYNAMIC DATA GENERATION ---
        const logs = window.DataCollector ? window.DataCollector.getLogs() : [];
        const answerLogs = logs.filter(l => l.event_type === 'question_answered' && l.system_id !== 'general' && l.system_id);
        
        const breakdown = {};
        answerLogs.forEach(log => {
            let groupKey = log.system_id;
            if (window.anatomyData) {
                const element = window.anatomyData.find(e => e.id === log.system_id);
                if (element && element.groupKey) {
                    groupKey = element.groupKey;
                }
            }
            if (!breakdown[groupKey]) {
                breakdown[groupKey] = { correct: 0, total: 0 };
            }
            breakdown[groupKey].total += 1;
            if (log.is_correct) breakdown[groupKey].correct += 1;
        });

        const targetGroups = ['nonmetal', 'noble_gas', 'alkali_metal', 'alkaline_earth', 'metalloid', 'halogen', 'post_transition', 'transition_metal', 'lanthanide'];
        
        systemsData = {};
        let totalCorrect = 0;
        let totalQuestions = 0;

        targetGroups.forEach(gk => {
            let correct = 0;
            let total = 0;
            if (breakdown[gk]) {
                correct = breakdown[gk].correct;
                total = breakdown[gk].total;
                totalCorrect += correct;
                totalQuestions += total;
            }
            let progress = total > 0 ? Math.round((correct / total) * 100) : 0;
            let status = 'weak';
            if (progress >= 80) status = 'mastered';
            else if (progress >= 60) status = 'good';
            else if (progress >= 40) status = 'developing';

            systemsData[gk] = {
                id: gk,
                labelKey: `group.${gk}`,
                progress: progress,
                status: status,
                achKeys: [], // Achievement logic can be expanded later
                recKey: `map.rec.${gk}`
            };
        });

        const overallProgress = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        let overallStatus = 'weak';
        if (overallProgress >= 80) overallStatus = 'mastered';
        else if (overallProgress >= 60) overallStatus = 'good';
        else if (overallProgress >= 40) overallStatus = 'developing';
        
        window.knowledgeMapOverall = { progress: overallProgress, status: overallStatus };

        // Clear previous
        mapRoot.innerHTML = '';
        // Also remove any previous mobile panel from parent
        const existingMobilePanel = mapRoot.parentElement ? mapRoot.parentElement.querySelector('.mobile-map-panel') : null;
        if (existingMobilePanel) existingMobilePanel.remove();

        const width = window.innerWidth;

        // 1. Mobile (< 768px)
        if (width < 768) {
            // Render into the parent .map-interface, not the hidden .map-canvas
            const mapInterface = mapRoot.closest('.map-interface') || mapRoot.parentElement;
            renderMobileFallback(mapInterface);
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

        // Restore active node to re-trigger panel translation
        if (activeNodeId) {
            const nodeToActivate = mapRoot.querySelector(`.map-node[data-id="${activeNodeId}"]`);
            if (nodeToActivate) {
                nodeToActivate.click();
            }
        }
    };

    function renderMobileFallback(root) {
        const overall = window.knowledgeMapOverall || { progress: 0, status: 'weak' };
        const t = (key, fallback) => (window.i18n && window.i18n.t ? window.i18n.t(key) : fallback || key);

        // Calculate stats
        const systemKeys = Object.keys(systemsData);
        const totalSystems = systemKeys.length;
        const masteredCount = systemKeys.filter(k => systemsData[k].status === 'mastered').length;
        const activeCount = systemKeys.filter(k => systemsData[k].progress > 0 && systemsData[k].status !== 'mastered').length;
        const weakCount = systemKeys.filter(k => systemsData[k].status === 'weak').length;

        // Status color and label
        const statusColor = statusColors[overall.status] || '#646cff';
        const statusLabel = t(`map.${overall.status}`, overall.status).toUpperCase();

        // SVG ring
        const radius = 46;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (overall.progress / 100) * circumference;

        // Group colors for system buttons
        const groupColors = {
            'nonmetal': '#22c55e',
            'noble_gas': '#a855f7',
            'alkali_metal': '#ef4444',
            'alkaline_earth': '#f97316',
            'metalloid': '#eab308',
            'halogen': '#8b5cf6',
            'post_transition': '#94a3b8',
            'transition_metal': '#3b82f6',
            'lanthanide': '#ec4899'
        };

        // Group icons for visual richness
        const groupIcons = {
            'nonmetal': '⚡',
            'noble_gas': '💎',
            'alkali_metal': '🔥',
            'alkaline_earth': '🪨',
            'metalloid': '⚗️',
            'halogen': '🧪',
            'post_transition': '🔩',
            'transition_metal': '⚙️',
            'lanthanide': '✨'
        };

        // Build system buttons HTML
        let systemButtonsHTML = '';
        systemKeys.forEach(key => {
            const sys = systemsData[key];
            const groupLabel = t(sys.labelKey, key);
            const barColor = statusColors[sys.status] || '#fff';
            const chipColor = groupColors[key] || '#666';
            const icon = groupIcons[key] || '🔬';

            systemButtonsHTML += `
                <button class="mobile-system-btn" data-system-id="${key}" style="--sys-color: ${chipColor}; --sys-bar-color: ${barColor};">
                    <div class="mobile-sys-icon">${icon}</div>
                    <div class="mobile-sys-info">
                        <span class="mobile-sys-name">${groupLabel}</span>
                        <div class="mobile-sys-bar-track">
                            <div class="mobile-sys-bar-fill" style="width: ${sys.progress}%; background: ${barColor};"></div>
                        </div>
                    </div>
                    <span class="mobile-sys-pct" style="color: ${barColor};">${sys.progress}%</span>
                    <svg class="mobile-sys-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>`;
        });

        const card = document.createElement('div');
        card.className = 'mobile-map-panel';
        card.innerHTML = `
            <div class="mobile-map-panel-inner">
                <!-- Header with ring -->
                <div class="mobile-map-header">
                    <div class="mobile-ring-wrap">
                        <svg class="mobile-ring-svg" viewBox="0 0 120 120">
                            <circle class="ring-bg" cx="60" cy="60" r="${radius}" />
                            <circle class="ring-fill" cx="60" cy="60" r="${radius}"
                                stroke="${statusColor}"
                                stroke-dasharray="${circumference}"
                                stroke-dashoffset="${offset}" />
                        </svg>
                        <div class="mobile-ring-text">
                            <span class="mobile-ring-pct" style="color: ${statusColor};">${overall.progress}%</span>
                        </div>
                    </div>
                    <div class="mobile-map-title-block">
                        <h3>${t('hero.title', 'Architecture of Matter').replace(/<[^>]*>/g, ' ').replace(/\s*\./g, '').trim()}</h3>
                        <div class="mobile-status-badge" style="color: ${statusColor}; border-color: ${statusColor};">${statusLabel}</div>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="mobile-stats-grid">
                    <div class="mobile-stat-card">
                        <div class="mobile-stat-num" style="color: var(--success, #34c759);">${masteredCount}</div>
                        <div class="mobile-stat-lbl">${t('map.mastered', 'Excellent')}</div>
                    </div>
                    <div class="mobile-stat-card">
                        <div class="mobile-stat-num" style="color: var(--info, #007aff);">${activeCount}</div>
                        <div class="mobile-stat-lbl">${t('map.progress', 'Progress')}</div>
                    </div>
                    <div class="mobile-stat-card">
                        <div class="mobile-stat-num" style="color: var(--error, #ff3b30);">${weakCount}</div>
                        <div class="mobile-stat-lbl">${t('map.weak', 'Weak')}</div>
                    </div>
                </div>

                <!-- System Performance Section -->
                <div class="mobile-perf-section">
                    <h4>${t('analytics.section.performance', 'System Performance')}</h4>
                    <div class="mobile-system-list">
                        ${systemButtonsHTML}
                    </div>
                </div>

                <!-- Action Button -->
                <a class="mobile-map-action-btn" id="mobile-map-start-btn">
                    ${t('hero.start', 'Get Started')} →
                </a>

                <!-- Back to Main Menu Button -->
                <button class="mobile-map-back-btn" id="mobile-map-back-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    <span>${t('hero.title', 'Architecture of Matter').replace(/<[^>]*>/g, ' ').replace(/\s*\./g, '').trim()}</span>
                </button>
            </div>
        `;
        root.appendChild(card);

        // Animate ring
        requestAnimationFrame(() => {
            const ringFill = card.querySelector('.ring-fill');
            if (ringFill) {
                ringFill.style.transition = 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)';
                ringFill.style.strokeDashoffset = offset;
            }
        });

        // Bind system buttons — navigate to Explore and select the system
        card.querySelectorAll('.mobile-system-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const sysId = btn.dataset.systemId;
                if (window.navigate) {
                    window.navigate('explore');
                }
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('setExploreFilter', { detail: { filter: sysId } }));
                }, 50);
            });
        });

        // Bind start button
        const startBtn = card.querySelector('#mobile-map-start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (window.navigate) window.navigate('explore');
            });
        }

        // Bind back button — return to home
        const backBtn = card.querySelector('#mobile-map-back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                if (window.navigate) window.navigate('home');
            });
        }
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
        const overall = window.knowledgeMapOverall || { progress: 0, status: 'weak' };
        const coreNode = createNode(root, { id: 'core', labelKey: 'hero.title', progress: overall.progress, status: overall.status }, 50, 50, true);

        // Add click listener to core node for overall progress
        coreNode.addEventListener('click', () => {
            document.querySelectorAll('.map-node').forEach(n => n.classList.remove('active'));
            coreNode.classList.add('active');
            updateOverallPanel(overall, systemsData);
        });

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
        
        node.dataset.id = data.id || (isCore ? 'core' : 'unknown');

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
                let text = window.i18n.t(data.labelKey);
                // The hero.title translation includes a dot for the main page, but we don't want it in the map node
                if (data.labelKey === 'hero.title') {
                    text = text.replace(/\./g, '');
                }
                label.innerHTML = text;
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

    // Store original panel HTML so we can restore it after overall panel replaces it
    const _originalPanelHTML = `
        <h3 id="panel-title">System Name</h3>
        <div class="panel-stat-row">
            <span class="panel-stat-label" data-i18n="map.progress">Progress</span>
            <span class="panel-stat-value" id="panel-progress">0%</span>
        </div>
        <div class="panel-status-badge" id="panel-status">Status</div>
        <div class="panel-section">
            <h4 data-i18n="map.achievements">Achievements</h4>
            <ul id="panel-achievements" class="panel-list"></ul>
        </div>
        <div class="panel-section">
            <h4 data-i18n="map.recommended">Recommended Action</h4>
            <div id="panel-recommendation" class="recommendation-card"></div>
        </div>
    `;

    function updateSidePanel(data) {
        const panel = document.getElementById('map-details-panel');
        const content = panel.querySelector('.panel-content');
        const placeholder = panel.querySelector('.panel-placeholder');

        placeholder.style.display = 'none';
        content.style.display = 'block';

        // Restore standard panel structure if it was replaced by the overall panel
        if (!document.getElementById('panel-title')) {
            content.innerHTML = _originalPanelHTML;
        }

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

                // Dispatch event to set the filter to the specific system group
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('setExploreFilter', { detail: { filter: data.id } }));
                }, 50);
            });
        }
    }

    function updateOverallPanel(overall, systems) {
        const panel = document.getElementById('map-details-panel');
        const content = panel.querySelector('.panel-content');
        const placeholder = panel.querySelector('.panel-placeholder');

        placeholder.style.display = 'none';
        content.style.display = 'block';

        const t = (key, fallback) => (window.i18n && window.i18n.t ? window.i18n.t(key) : fallback || key);

        // Calculate stats
        const systemKeys = Object.keys(systems);
        const totalSystems = systemKeys.length;
        const masteredCount = systemKeys.filter(k => systems[k].status === 'mastered').length;
        const weakCount = systemKeys.filter(k => systems[k].status === 'weak').length;
        const activeCount = systemKeys.filter(k => systems[k].progress > 0).length;

        // Status color
        const statusColor = statusColors[overall.status] || '#646cff';
        const statusLabel = t(`map.${overall.status}`, overall.status).toUpperCase();

        // SVG circular progress ring
        const radius = 46;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (overall.progress / 100) * circumference;

        // Build per-group breakdown bars HTML
        let breakdownHTML = '';
        systemKeys.forEach(key => {
            const sys = systems[key];
            const groupLabel = t(sys.labelKey, key);
            const barColor = statusColors[sys.status] || '#fff';
            breakdownHTML += `
                <div class="overall-breakdown-row">
                    <span class="breakdown-label">${groupLabel}</span>
                    <div class="breakdown-bar-track">
                        <div class="breakdown-bar-fill" style="width: ${sys.progress}%; background: ${barColor};"></div>
                    </div>
                    <span class="breakdown-value" style="color: ${barColor};">${sys.progress}%</span>
                </div>`;
        });

        content.innerHTML = `
            <div class="overall-panel-header">
                <div class="overall-ring-container">
                    <svg class="overall-ring-svg" viewBox="0 0 120 120">
                        <circle class="ring-bg" cx="60" cy="60" r="${radius}" />
                        <circle class="ring-fill" cx="60" cy="60" r="${radius}"
                            stroke="${statusColor}"
                            stroke-dasharray="${circumference}"
                            stroke-dashoffset="${offset}" />
                    </svg>
                    <div class="overall-ring-text">
                        <span class="overall-ring-pct" style="color: ${statusColor};">${overall.progress}%</span>
                    </div>
                </div>
                <div class="overall-title-block">
                    <h3>${t('hero.title', 'Architecture of Matter').replace(/<[^>]*>/g, ' ').replace(/\s*\./g, '').trim()}</h3>
                    <div class="overall-status-badge" style="color: ${statusColor}; border-color: ${statusColor};">${statusLabel}</div>
                </div>
            </div>

            <div class="overall-stats-grid">
                <div class="overall-stat-card">
                    <div class="overall-stat-number" style="color: var(--success, #34c759);">${masteredCount}</div>
                    <div class="overall-stat-label">${t('map.mastered', 'Mastered')}</div>
                </div>
                <div class="overall-stat-card">
                    <div class="overall-stat-number" style="color: var(--info, #007aff);">${activeCount}</div>
                    <div class="overall-stat-label">${t('map.progress', 'Active')}</div>
                </div>
                <div class="overall-stat-card">
                    <div class="overall-stat-number" style="color: var(--error, #ff3b30);">${weakCount}</div>
                    <div class="overall-stat-label">${t('map.weak', 'Weak')}</div>
                </div>
            </div>

            <div class="overall-breakdown-section">
                <h4>${t('analytics.section.performance', 'System Performance')}</h4>
                <div class="overall-breakdown-list">
                    ${breakdownHTML}
                </div>
            </div>

            <a class="overall-action-btn" id="overall-explore-btn">
                ${t('hero.start', 'Start Exploring')} →
            </a>
        `;

        // Animate ring on next frame
        requestAnimationFrame(() => {
            const ringFill = content.querySelector('.ring-fill');
            if (ringFill) {
                ringFill.style.transition = 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)';
                ringFill.style.strokeDashoffset = offset;
            }
        });

        // Explore button
        const exploreBtn = document.getElementById('overall-explore-btn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (window.navigate) window.navigate('explore');
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
