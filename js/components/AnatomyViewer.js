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

            .explore-filter-panel {
                width: 100%;
                background: rgba(18, 18, 29, 0.45);
                backdrop-filter: blur(24px);
                -webkit-backdrop-filter: blur(24px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 18px;
                padding: 14px 20px;
                margin-bottom: 30px;
                display: flex;
                align-items: center;
                gap: 16px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
                overflow: hidden;
            }

            body.theme-light .explore-filter-panel {
                background: rgba(245, 245, 250, 0.8);
                border-color: rgba(0, 0, 0, 0.06);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
            }

            .explore-filter-label {
                display: flex;
                align-items: center;
                gap: 8px;
                color: var(--text-primary, #ffffff);
                font-size: 0.85rem;
                font-weight: 700;
                font-family: 'Space Grotesk', sans-serif;
                text-transform: uppercase;
                letter-spacing: 0.06em;
                flex-shrink: 0;
                padding-right: 18px;
                border-right: 1px solid rgba(255, 255, 255, 0.1);
                white-space: nowrap;
            }

            body.theme-light .explore-filter-label {
                color: #1d1d1f;
                border-right-color: rgba(0, 0, 0, 0.1);
            }

            .explore-filter-scroll {
                display: flex;
                align-items: center;
                gap: 10px;
                overflow-x: auto;
                width: 100%;
                scrollbar-width: none; /* Firefox */
                -ms-overflow-style: none; /* IE 10+ */
                padding: 2px 0;
            }

            .explore-filter-scroll::-webkit-scrollbar {
                display: none; /* Chrome, Safari */
            }

            .explore-filter-pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 99px;
                color: var(--text-secondary, rgba(255, 255, 255, 0.6));
                font-size: 0.82rem;
                font-weight: 600;
                font-family: 'Space Grotesk', sans-serif;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                white-space: nowrap;
            }

            body.theme-light .explore-filter-pill {
                background: rgba(0, 0, 0, 0.02);
                border-color: rgba(0, 0, 0, 0.06);
                color: #515154;
            }

            .explore-filter-pill:hover {
                color: var(--text-primary, #ffffff);
                background: rgba(255, 255, 255, 0.08);
                border-color: rgba(255, 255, 255, 0.15);
                transform: translateY(-1px);
            }

            body.theme-light .explore-filter-pill:hover {
                color: #1d1d1f;
                background: rgba(0, 0, 0, 0.05);
                border-color: rgba(0, 0, 0, 0.12);
            }

            .explore-filter-pill.active {
                color: var(--active-color, #ffffff) !important;
                background: var(--active-bg, rgba(255, 255, 255, 0.08)) !important;
                border-color: var(--active-border, rgba(255, 255, 255, 0.25)) !important;
                font-weight: 700;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
            }

            body.theme-light .explore-filter-pill.active {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
            }

            .explore-filter-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                flex-shrink: 0;
            }

            /* Responsive Adaptability Overrides for Mobile Device sizes */
            @media (max-width: 768px) {
                .explore-filter-panel {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 14px 16px;
                    border-radius: 16px;
                    margin-bottom: 24px;
                }

                .explore-filter-label {
                    border-right: none;
                    padding-right: 0;
                    padding-bottom: 8px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    width: 100%;
                }

                body.theme-light .explore-filter-label {
                    border-bottom-color: rgba(0, 0, 0, 0.08);
                }
            }
        `;
        document.head.appendChild(style);
    }

    function createFilterBar() {
        injectFilterStyles();

        const panel = document.createElement('div');
        panel.className = 'explore-filter-panel';

        // Title/Label on the left
        const label = document.createElement('div');
        label.className = 'explore-filter-label';
        label.innerHTML = `
            <span style="color: var(--accent-blue, #60A5FA); font-size: 1.1rem; line-height: 1;">⚏</span>
            <span>${t('filter.title', 'Filter by Group')}</span>
        `;
        panel.appendChild(label);

        // Scrollable pills list
        const scrollContainer = document.createElement('div');
        scrollContainer.className = 'explore-filter-scroll';

        const groups = ['all', ...new Set((window.anatomyData || []).map(s => s.groupKey).filter(gk => gk && gk !== 'scientist'))];

        groups.forEach(gk => {
            const pill = document.createElement('button');
            pill.className = 'explore-filter-pill' + (activeFilter === gk ? ' active' : '');
            
            const color = gk === 'all' ? 'var(--text-primary, #ffffff)' : (GROUP_COLORS[gk] || '#888');
            pill.style.setProperty('--active-color', color);
            pill.style.setProperty('--active-border', color + '50');
            pill.style.setProperty('--active-bg', color + '15');

            const groupText = gk === 'all' ? t('filter.all', 'Все') : t(GROUP_LABELS_KEY[gk], gk);
            
            pill.innerHTML = `
                <span class="explore-filter-dot" style="background: ${color}"></span>
                <span>${groupText}</span>
            `;

            pill.addEventListener('click', () => {
                activeFilter = gk;
                renderAll();
            });

            scrollContainer.appendChild(pill);
        });

        panel.appendChild(scrollContainer);
        return panel;
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
