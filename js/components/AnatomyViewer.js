/* js/components/AnatomyViewer.js */
(function () {
    let viewerContainer = null;
    let activeFilter = 'all';

    const GROUP_COLORS = {
        nonmetal:         '#4ADE80',
        noble_gas:        '#C084FC',
        alkali_metal:     '#F87171',
        alkaline_earth:   '#FB923C',
        metalloid:        '#FBBF24',
        halogen:          '#A78BFA',
        transition_metal: '#60A5FA',
        post_transition:  '#94A3B8',
        lanthanide:       '#F472B6',
        actinide:         '#34D399',
        scientist:        '#FDE047',
    };

    const GROUP_LABELS_KEY = {
        nonmetal:         'group.nonmetal',
        noble_gas:        'group.noble_gas',
        alkali_metal:     'group.alkali_metal',
        alkaline_earth:   'group.alkaline_earth',
        metalloid:        'group.metalloid',
        halogen:          'group.halogen',
        transition_metal: 'group.transition_metal',
        post_transition:  'group.post_transition',
        lanthanide:       'group.lanthanide',
        actinide:         'group.actinide',
        scientist:        'group.scientist',
    };

    window.initAnatomyViewer = function (containerId) {
        viewerContainer = document.getElementById(containerId);
        if (!viewerContainer) return;
        renderAll();
        setTimeout(() => { if (viewerContainer) renderAll(); }, 500);
    };

    // Cache current language to avoid redundant re-renders
    let lastLang = window.i18n ? window.i18n.lang : 'en';

    window.addEventListener('languageChanged', (e) => {
        const newLang = e.detail ? e.detail.lang : (window.i18n ? window.i18n.lang : 'en');
        
        if (viewerContainer) {
            // Always re-render the grid/filters for the new language
            renderAll();
            
            // Only refresh overlay if it's open AND the language actually changed
            const overlay = document.querySelector('.detail-overlay');
            if (overlay && window.currentOpenSystem && newLang !== lastLang) {
                // Save current scroll position if needed, but here we refresh content
                overlay.remove();
                window.openAnatomyDetail(window.currentOpenSystem);
            }
        }
        lastLang = newLang;
    });

    window.addEventListener('selectSystem', (e) => {
        const systemId = e.detail.systemId;
        if (!systemId || !window.anatomyData) return;
        const system = window.anatomyData.find(s => s.id === systemId);
        if (system) window.openAnatomyDetail(system);
    });

    window.addEventListener('setExploreFilter', (e) => {
        const filter = e.detail.filter;
        if (filter) {
            activeFilter = filter;
            if (viewerContainer) renderAll();
        }
    });


    function t(key, fallback) {
        return (window.i18n && window.i18n.t(key)) || fallback || key;
    }

    function renderAll() {
        if (!viewerContainer) return;
        viewerContainer.innerHTML = '';

        // --- Filter bar ---
        const filterBar = createFilterBar();
        viewerContainer.appendChild(filterBar);

        // --- Grid ---
        renderGrid();
    }

    function injectFilterStyles() {
        if (document.getElementById('anatomy-filter-premium-styles')) return;
        const style = document.createElement('style');
        style.id = 'anatomy-filter-premium-styles';
        style.textContent = `
            #view-explore {
                flex-direction: column !important;
                align-items: stretch !important;
            }

            /* Horizontal Trigger Bar */
            .explore-filter-trigger {
                width: calc(100% - var(--spacing-xl) * 2);
                max-width: calc(1400px - var(--spacing-xl) * 2);
                margin: var(--spacing-xl) auto 10px auto;
                background: rgba(18, 18, 29, 0.45);
                backdrop-filter: blur(24px);
                -webkit-backdrop-filter: blur(24px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 18px;
                padding: 16px 24px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }

            body.theme-light .explore-filter-trigger {
                background: rgba(245, 245, 250, 0.85);
                border-color: rgba(0, 0, 0, 0.06);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
            }

            .explore-filter-trigger:hover {
                background: rgba(255, 255, 255, 0.06);
                border-color: rgba(255, 255, 255, 0.15);
                transform: translateY(-2px);
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
            }

            body.theme-light .explore-filter-trigger:hover {
                background: rgba(0, 0, 0, 0.02);
                border-color: rgba(0, 0, 0, 0.12);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
            }

            @media (max-width: 768px) {
                .explore-filter-trigger {
                    width: calc(100% - var(--spacing-md) * 2) !important;
                    margin: var(--spacing-md) auto 0 auto !important;
                }
            }

            @media (max-width: 360px) {
                .explore-filter-trigger {
                    width: calc(100% - 20px) !important;
                    margin: 12px auto 0 auto !important;
                }
            }

            .explore-trigger-content {
                display: flex;
                align-items: center;
                gap: 12px;
                font-family: 'Space Grotesk', sans-serif;
                font-size: 0.95rem;
                color: var(--text-primary, #ffffff);
            }

            body.theme-light .explore-trigger-content {
                color: #1d1d1f;
            }

            .explore-trigger-icon {
                color: var(--accent-blue, #60A5FA);
                font-size: 1.2rem;
                line-height: 1;
            }

            .explore-trigger-text {
                font-weight: 500;
                letter-spacing: 0.02em;
                color: var(--text-secondary, rgba(255, 255, 255, 0.6));
            }

            body.theme-light .explore-trigger-text {
                color: #515154;
            }

            .explore-trigger-active-val {
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.04em;
            }

            .explore-trigger-chevron {
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-secondary, rgba(255, 255, 255, 0.6));
                transition: transform 0.3s ease;
            }

            body.theme-light .explore-trigger-chevron {
                color: #515154;
            }

            .explore-filter-trigger:hover .explore-trigger-chevron {
                transform: translateY(2px);
                color: var(--text-primary, #ffffff);
            }

            body.theme-light .explore-filter-trigger:hover .explore-trigger-chevron {
                color: #1d1d1f;
            }

            /* Filter Drawer Overlay Backdrop */
            .explore-drawer-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .explore-drawer-overlay.active {
                opacity: 1;
            }

            /* Fully Opened Dashboard Panel on Desktop & Tablet */
            .explore-drawer-panel {
                width: 90%;
                max-width: 1100px;
                height: auto;
                max-height: 85vh;
                background: rgba(10, 10, 16, 0.94);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 28px;
                box-shadow: 0 20px 80px rgba(0, 0, 0, 0.6);
                padding: 40px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                transform: scale(0.95) translateY(20px);
                opacity: 0;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                position: relative;
            }

            body.theme-light .explore-drawer-panel {
                background: rgba(250, 250, 252, 0.96);
                border-color: rgba(0, 0, 0, 0.08);
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
            }

            .explore-drawer-overlay.active .explore-drawer-panel {
                transform: scale(1) translateY(0);
                opacity: 1;
            }

            /* Close Button */
            .explore-drawer-close {
                position: absolute;
                top: 36px;
                right: 30px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.08);
                color: var(--text-primary, #ffffff);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }

            body.theme-light .explore-drawer-close {
                background: rgba(0, 0, 0, 0.04);
                border-color: rgba(0, 0, 0, 0.06);
                color: #1d1d1f;
            }

            .explore-drawer-close:hover {
                background: rgba(255, 255, 255, 0.15);
                border-color: rgba(255, 255, 255, 0.2);
                transform: scale(1.05) rotate(90deg);
            }

            body.theme-light .explore-drawer-close:hover {
                background: rgba(0, 0, 0, 0.08);
                border-color: rgba(0, 0, 0, 0.12);
            }

            /* Title & Subtitle */
            .explore-drawer-header {
                margin-bottom: 35px;
                padding-right: 50px;
            }

            .explore-drawer-title {
                font-family: 'Space Grotesk', sans-serif;
                font-size: 1.8rem;
                font-weight: 700;
                color: var(--text-primary, #ffffff);
                margin: 0 0 8px 0;
            }

            body.theme-light .explore-drawer-title {
                color: #1d1d1f;
            }

            .explore-drawer-subtitle {
                font-family: 'Inter', sans-serif;
                font-size: 0.88rem;
                color: var(--text-secondary, rgba(255, 255, 255, 0.55));
                margin: 0;
                line-height: 1.4;
            }

            body.theme-light .explore-drawer-subtitle {
                color: #6e6e73;
            }

            /* Items List container (Grid on Desktop/Tablet) */
            .explore-drawer-list {
                flex: 1;
                overflow-y: auto;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 16px;
                padding-right: 4px;
                scrollbar-width: thin;
                scrollbar-color: rgba(255,255,255,0.1) transparent;
            }

            .explore-drawer-list::-webkit-scrollbar {
                width: 6px;
            }

            .explore-drawer-list::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.15);
                border-radius: 3px;
            }

            /* List Item Row styling */
            .explore-drawer-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px 20px;
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 14px;
                color: var(--text-secondary, rgba(255, 255, 255, 0.7));
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                font-family: 'Space Grotesk', sans-serif;
                font-size: 0.95rem;
                font-weight: 500;
            }

            body.theme-light .explore-drawer-item {
                background: rgba(0, 0, 0, 0.02);
                border-color: rgba(0, 0, 0, 0.05);
                color: #515154;
            }

            .explore-drawer-item:hover {
                background: rgba(255, 255, 255, 0.06);
                border-color: rgba(255, 255, 255, 0.15);
                color: var(--text-primary, #ffffff);
                transform: translateY(-1px);
            }

            body.theme-light .explore-drawer-item:hover {
                background: rgba(0, 0, 0, 0.04);
                border-color: rgba(0, 0, 0, 0.1);
                color: #1d1d1f;
            }

            /* Active List Item Row styling */
            .explore-drawer-item.active {
                background: rgba(255, 255, 255, 0.08) !important;
                border: 1.5px solid var(--item-active-border, #ffffff) !important;
                color: var(--text-primary, #ffffff) !important;
                font-weight: 700;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
            }

            body.theme-light .explore-drawer-item.active {
                background: rgba(255, 255, 255, 1) !important;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
            }

            /* Dot on left */
            .explore-drawer-item-left {
                display: flex;
                align-items: center;
                gap: 14px;
            }

            .explore-drawer-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                box-shadow: 0 0 10px var(--dot-glow, transparent);
            }

            /* Checkmark check on right */
            .explore-drawer-check {
                color: var(--item-active-color, #60A5FA);
                font-size: 1.1rem;
                font-weight: 900;
                opacity: 0;
                transform: scale(0.6);
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .explore-drawer-item.active .explore-drawer-check {
                opacity: 1;
                transform: scale(1);
            }

            /* Reset Button at bottom */
            .explore-drawer-footer {
                margin-top: 25px;
            }

            .explore-drawer-reset-btn {
                width: 100%;
                padding: 16px;
                border-radius: 14px;
                background: transparent;
                border: 1px dashed rgba(255, 255, 255, 0.15);
                color: var(--text-secondary, rgba(255, 255, 255, 0.6));
                font-family: 'Space Grotesk', sans-serif;
                font-size: 0.95rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            body.theme-light .explore-drawer-reset-btn {
                border-color: rgba(0, 0, 0, 0.15);
                color: #515154;
            }

            .explore-drawer-reset-btn:hover {
                border-color: rgba(255, 255, 255, 0.3);
                background: rgba(255, 255, 255, 0.03);
                color: var(--text-primary, #ffffff);
            }

            body.theme-light .explore-drawer-reset-btn:hover {
                border-color: rgba(0, 0, 0, 0.3);
                background: rgba(0, 0, 0, 0.02);
                color: #1d1d1f;
            }

            /* Mobile (L, M, S Phone sizes) bottom sheet adaptation */
            @media (max-width: 768px) {
                .explore-drawer-overlay {
                    align-items: flex-end !important;
                    justify-content: flex-end !important;
                }

                .explore-drawer-panel {
                    width: 100% !important;
                    max-width: 100% !important;
                    height: 85% !important;
                    max-height: 85vh !important;
                    border-radius: 24px 24px 0 0 !important;
                    border: none !important;
                    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
                    transform: translateY(100%) !important;
                    margin-top: auto !important;
                    padding: 30px 20px !important;
                    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.4) !important;
                }

                .explore-drawer-overlay.active .explore-drawer-panel {
                    transform: translateY(0) !important;
                    opacity: 1 !important;
                }

                /* Restore vertical single-column layout on phone sizes */
                .explore-drawer-list {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 12px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function openFilterDrawer() {
        if (document.querySelector('.explore-drawer-overlay')) return;

        const overlay = document.createElement('div');
        overlay.className = 'explore-drawer-overlay';

        const panel = document.createElement('div');
        panel.className = 'explore-drawer-panel';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'explore-drawer-close';
        closeBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

        const header = document.createElement('div');
        header.className = 'explore-drawer-header';
        header.innerHTML = `
            <h2 class="explore-drawer-title">${t('filter.title', 'Фильтр по группам')}</h2>
            <p class="explore-drawer-subtitle">${t('filter.subtitle', 'Выберите группу элементов для фильтрации')}</p>
        `;

        const list = document.createElement('div');
        list.className = 'explore-drawer-list';

        const groups = ['all', ...new Set((window.anatomyData || []).map(s => s.groupKey).filter(gk => gk && gk !== 'scientist'))];

        groups.forEach(gk => {
            const item = document.createElement('div');
            item.className = 'explore-drawer-item' + (activeFilter === gk ? ' active' : '');
            
            const color = gk === 'all' ? '#ffffff' : (GROUP_COLORS[gk] || '#888');
            item.style.setProperty('--item-active-border', color);
            item.style.setProperty('--item-active-color', color);
            item.style.setProperty('--dot-glow', color + '40');

            const labelText = gk === 'all' ? t('filter.all', 'Все') : t(GROUP_LABELS_KEY[gk], gk);

            item.innerHTML = `
                <div class="explore-drawer-item-left">
                    <span class="explore-drawer-dot" style="background: ${color};"></span>
                    <span>${labelText}</span>
                </div>
                <span class="explore-drawer-check">✓</span>
            `;

            item.addEventListener('click', () => {
                activeFilter = gk;
                panel.querySelectorAll('.explore-drawer-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
                renderAll();
                closeDrawer();
            });

            list.appendChild(item);
        });

        const footer = document.createElement('div');
        footer.className = 'explore-drawer-footer';
        
        const resetBtn = document.createElement('button');
        resetBtn.className = 'explore-drawer-reset-btn';
        resetBtn.textContent = t('filter.reset', 'Сбросить на Все');
        
        resetBtn.addEventListener('click', () => {
            activeFilter = 'all';
            renderAll();
            closeDrawer();
        });

        footer.appendChild(resetBtn);

        panel.appendChild(closeBtn);
        panel.appendChild(header);
        panel.appendChild(list);
        panel.appendChild(footer);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 10);

        function closeDrawer() {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => {
                overlay.remove();
            }, 400);
        }

        closeBtn.addEventListener('click', closeDrawer);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeDrawer();
        });
    }

    function createFilterBar() {
        injectFilterStyles();

        const trigger = document.createElement('div');
        trigger.className = 'explore-filter-trigger';
        trigger.id = 'explore-filter-trigger';

        const activeGK = activeFilter;
        const activeColor = activeGK === 'all' ? 'var(--text-primary, #ffffff)' : (GROUP_COLORS[activeGK] || '#888');
        const activeText = activeGK === 'all' ? t('filter.all', 'Все') : t(GROUP_LABELS_KEY[activeGK], activeGK);

        trigger.innerHTML = `
            <div class="explore-trigger-content">
                <span class="explore-trigger-icon">⚏</span>
                <span class="explore-trigger-text">${t('filter.title', 'Фильтр по группам')}:</span>
                <span class="explore-trigger-active-val" style="color: ${activeColor};">${activeText}</span>
            </div>
            <div class="explore-trigger-chevron">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
        `;

        trigger.addEventListener('click', () => {
            openFilterDrawer();
        });

        return trigger;
    }

    function renderGrid() {
        const grid = document.createElement('div');
        grid.className = 'anatomy-grid';

        const data = (window.anatomyData || []).filter(s => s.groupKey !== 'scientist');
        const filtered = activeFilter === 'all'
            ? data
            : data.filter(s => s.groupKey === activeFilter);

        if (filtered.length === 0) {
            const empty = document.createElement('p');
            empty.style.cssText = 'color: var(--text-secondary); padding: 40px; grid-column: 1/-1; text-align: center;';
            empty.textContent = t('filter.empty', 'Нет элементов в этой группе');
            grid.appendChild(empty);
        } else {
            filtered.forEach(system => grid.appendChild(createSystemCard(system)));
        }

        viewerContainer.appendChild(grid);
    }

    function createSystemCard(system) {
        const card = document.createElement('div');
        card.className = 'anatomy-card';
        card.setAttribute('data-system', system.id);

        const groupColor = system.groupKey ? (GROUP_COLORS[system.groupKey] || system.color) : system.color;
        
        // For scientists: portrait photo with face visible at top; for elements: standard display
        const isScientist = system.groupKey === 'scientist';
        const imageEl = system.image
            ? `<img src="${system.image}" alt="${t(system.titleKey, system.id)}"
                style="position:absolute;top:0;left:0;width:100%;height:100%;
                object-fit:cover;${isScientist ? 'object-position:center top;' : ''}
                opacity:${isScientist ? '0.55' : '0.55'};mix-blend-mode:luminosity;transition:opacity 0.4s ease;">`
            : '';

        const atomicBadge = system.atomicNumber != null ? `
            <div class="element-badge" style="
                position:absolute;top:10px;left:10px;
                background:rgba(0,0,0,0.55);backdrop-filter:blur(6px);
                border:1px solid ${groupColor}40;border-radius:8px;
                padding:4px 8px;display:flex;flex-direction:column;align-items:center;
                min-width:38px;z-index:2;
            ">
                ${!isScientist ? `<span style="font-size:0.65rem;color:${groupColor};font-weight:700;line-height:1;">${system.atomicNumber}</span>` : ''}
                <span style="font-size:1rem;color:#fff;font-weight:800;line-height:1.1;letter-spacing:-0.03em;${isScientist ? 'margin-top:2px;margin-bottom:2px;' : ''}">${system.symbol || ''}</span>
            </div>` : '';

        const groupTag = system.groupKey ? `
            <span class="group-tag" style="
                position:absolute;top:10px;right:10px;z-index:2;
                background:${groupColor}20;border:1px solid ${groupColor}40;
                color:${groupColor};font-size:0.6rem;font-weight:700;
                padding:3px 7px;border-radius:999px;white-space:nowrap;
                backdrop-filter:blur(4px);
            ">${t(GROUP_LABELS_KEY[system.groupKey], system.group || system.groupKey)}</span>` : '';

        card.innerHTML = `
            <div class="card-visual" style="border-color:${system.color}40;overflow:hidden;position:relative;">
                ${imageEl}
                ${atomicBadge}
                ${groupTag}
                <div class="visual-placeholder" style="
                    background:radial-gradient(circle at 50% 50%,${system.color} 0%,transparent 80%);
                    opacity:0.3;
                "></div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${t(system.titleKey, system.id)}</h3>
                <p class="card-desc">${t(system.descKey, '')}</p>
            </div>
            <div class="card-actions">
                <button class="btn-text">${t('detail.explore', 'Explore')} &rarr;</button>
            </div>
        `;

        card.addEventListener('click', () => window.openAnatomyDetail(system));
        return card;
    }

    window.openAnatomyDetail = function (system) {
        window.currentOpenSystem = system;
        const detailOverlay = document.createElement('div');
        detailOverlay.className = 'detail-overlay fade-in';
        detailOverlay.setAttribute('translate', 'no');

        const groupColor = system.groupKey ? (GROUP_COLORS[system.groupKey] || system.color) : system.color;
        const isDetailScientist = system.groupKey === 'scientist';

        const metaBadge = system.atomicNumber != null ? `
            <div style="
                display:inline-flex;align-items:center;gap:12px;
                background:${groupColor}12;border:1px solid ${groupColor}30;
                border-radius:12px;padding:8px 16px;margin-bottom:12px;
            ">
                <div style="text-align:center;">
                    <div style="font-size:2rem;font-weight:900;color:${groupColor};line-height:1;">${system.symbol || ''}</div>
                    ${!isDetailScientist ? `<div style="font-size:0.7rem;color:var(--text-secondary);">${system.atomicNumber}</div>` : ''}
                </div>
                <div style="border-left:1px solid ${groupColor}30;padding-left:12px;">
                    <div style="font-size:0.75rem;color:${groupColor};font-weight:600;">
                        ${t(GROUP_LABELS_KEY[system.groupKey], system.group || '')}
                    </div>
                    ${!isDetailScientist ? `
                    <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">
                        ${t('detail.atomic_number', 'Атомный номер')}: ${system.atomicNumber}
                    </div>` : ''}
                </div>
            </div>` : '';

        detailOverlay.innerHTML = `
            <style>
                .detail-text-wrapper { position:relative; max-height:140px; overflow:hidden; transition:max-height 0.4s ease; }
                .detail-text-wrapper.expanded { max-height:5000px; }
                .detail-fade {
                    position:absolute;bottom:0;left:0;width:100%;height:50px;
                    background:linear-gradient(to bottom,transparent,rgba(5,5,5,1));
                    transition:opacity 0.3s;pointer-events:none;
                }
                body.theme-light .detail-fade { background:linear-gradient(to bottom,transparent,rgba(251,251,253,1)); }
                .detail-text-wrapper.expanded .detail-fade { opacity:0; }
                .read-more-btn {
                    margin-top:10px;color:var(--accent-blue,#007aff);font-weight:600;
                    font-size:0.9rem;cursor:pointer;background:none;border:none;padding:0;
                    display:inline-flex;align-items:center;gap:5px;
                }
                .read-more-btn:hover { text-decoration:underline; }
            </style>
            <button class="close-btn">&times;</button>
            <div class="detail-content">
                <div class="detail-header">
                    ${metaBadge}
                    <h2 class="detail-title">${t(system.titleKey, system.id)}</h2>
                    <p class="detail-subtitle">${t(system.descKey, '')}</p>
                </div>
                <div class="detail-body">
                    <div class="detail-visual">
                        <div class="visual-stack" style="display:flex;flex-direction:column;gap:20px;width:100%;">
                            <div class="large-visual" style="
                                border:2px solid ${system.color}20;position:relative;overflow:hidden;
                                display:flex;align-items:center;justify-content:center;
                                background:radial-gradient(circle at center,${system.color}05 0%,transparent 70%);
                                border-radius:16px;
                            ">
                                ${system.image ? (system.groupKey === 'scientist'
                                    ? `<div style="width:100%;height:100%;position:relative;overflow:hidden;border-radius:14px;">
                                        <img src="${system.image}" alt="${t(system.titleKey,system.id)}"
                                            style="width:100%;height:100%;object-fit:cover;object-position:center top;filter:brightness(0.85) contrast(1.05);display:block;">
                                        <div style="position:absolute;inset:0;background:linear-gradient(to bottom, transparent 50%, rgba(5,5,5,0.85) 100%);pointer-events:none;"></div>
                                    </div>`
                                    : `<img src="${system.image}" alt="${t(system.titleKey,system.id)}"
                                        style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 0 20px ${system.color}40);">`)
                                : ''}
                            </div>
                            ${(system.secondaryImages || []).map(img => `
                                <div class="secondary-visual" style="
                                    border:2px solid ${system.color}20;position:relative;overflow:hidden;
                                    display:flex;align-items:center;justify-content:center;
                                    background:radial-gradient(circle at center,${system.color}05 0%,transparent 70%);
                                    border-radius:16px;
                                ">
                                    <img src="${img.url}" alt="${img.caption||t(system.titleKey,system.id)}"
                                        style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 0 20px ${system.color}40);">
                                    ${img.caption?`<div style="position:absolute;bottom:10px;left:0;width:100%;text-align:center;color:${system.color};background:rgba(0,0,0,0.7);padding:5px;">${img.caption}</div>`:''}
                                </div>`).join('')}
                        </div>
                    </div>
                    <div class="detail-info">
                        <h3>${t('detail.overview','Overview')}</h3>
                        <div class="detail-text-wrapper">
                            <div class="detail-description">${t(system.detailsKey,'')}</div>
                            <div class="detail-fade"></div>
                        </div>
                        <button class="read-more-btn">${t('detail.read_more','Read More')} &darr;</button>
                        <div class="layers-control">
                            <h4>${t('detail.layers','Layers')}</h4>
                            ${(system.layers||[]).map(layer => {
                                const layerKey = 'layer.' + layer.toLowerCase().replace(/ /g,'_');
                                return `<span class="tag">${t(layerKey, layer)}</span>`;
                            }).join('')}
                        </div>
                        ${renderResources(system)}
                    </div>
                </div>
            </div>
            <div id="ai-assistant-container"></div>
        `;

        document.body.appendChild(detailOverlay);
        document.body.style.overflow = 'hidden';

        if (window.LearningAssistant) {
            new window.LearningAssistant(detailOverlay.querySelector('#ai-assistant-container'), system.id);
        }

        detailOverlay.querySelector('.close-btn').addEventListener('click', () => {
            detailOverlay.remove();
            document.body.style.overflow = '';
            window.currentOpenSystem = null;
        });

        const readMoreBtn = detailOverlay.querySelector('.read-more-btn');
        const textWrapper = detailOverlay.querySelector('.detail-text-wrapper');
        if (readMoreBtn && textWrapper) {
            readMoreBtn.addEventListener('click', () => {
                textWrapper.classList.toggle('expanded');
                const expanded = textWrapper.classList.contains('expanded');
                readMoreBtn.innerHTML = expanded
                    ? `${t('detail.read_less','Read Less')} &uarr;`
                    : `${t('detail.read_more','Read More')} &darr;`;
            });
        }
    };

    function renderResources(system) {
        if (!system.resources || system.resources.length === 0) return '';
        return `
            <div class="resource-links">
                <h4>${t('detail.resources','External Resources')}</h4>
                <div class="resource-list">
                    ${system.resources.map(link => {
                        const linkText = (window.i18n && link.textKey) ? window.i18n.t(link.textKey) : link.text;
                        return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="resource-link">${linkText}</a>`;
                    }).join('')}
                </div>
            </div>
        `;
    }
})();
