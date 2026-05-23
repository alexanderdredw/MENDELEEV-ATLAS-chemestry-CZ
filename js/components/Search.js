/* js/components/Search.js — Professional Chemistry Search with Glossary */
(function () {
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    let activeFilter = 'all';
    let debounceTimer = null;

    window.initSearch = function () {
        const searchContainer = document.getElementById('view-search');
        if (searchContainer) {
            renderSearchUI(searchContainer);
        } else {
            console.error('Search view container #view-search not found!');
        }
    };

    // Re-render on language change
    window.addEventListener('languageChanged', () => {
        const searchContainer = document.getElementById('view-search');
        if (searchContainer && searchContainer.innerHTML !== '') {
            renderSearchUI(searchContainer);
        }
    });

    function renderSearchUI(container) {
        const t = window.i18n ? window.i18n.t : (k) => k;
        container.className = 'search-section';

        // Build group filter chips from available data
        const groups = getAvailableGroups();

        container.innerHTML = `
            <div class="search-hero">
                <div class="search-hero-inner fade-in-up">
                    <div class="search-icon-wrap">
                        <svg class="search-hero-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        <div class="search-icon-glow"></div>
                    </div>
                    <h2 class="search-title" data-i18n="search.title">${t('search.title')}</h2>
                    <p class="search-subtitle">${t('search.subtitle') !== 'search.subtitle' ? t('search.subtitle') : 'Find any element by name, symbol, or property'}</p>
                </div>

                <div class="search-input-wrapper fade-in-up delay-1">
                    <svg class="search-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <input type="text" id="search-input" class="search-input" placeholder="${t('search.placeholder')}" autocomplete="off" spellcheck="false">
                    <div class="search-kbd-hint">
                        <kbd>/</kbd>
                    </div>
                    <button id="search-clear-btn" class="search-clear-btn" style="display:none;" aria-label="Clear">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>

                <div class="search-filters" id="search-filters">
                    <button class="filter-chip active" data-filter="all"
                        style="--chip-active-color:#007aff;--chip-active-bg:rgba(0,122,255,0.13);--chip-active-border:rgba(0,122,255,0.35);--chip-active-glow:rgba(0,122,255,0.1)"
                        aria-pressed="true">${t('filter.all') || 'All'}</button>
                    <button class="filter-chip" data-filter="glossary"
                        style="--chip-active-color:#a78bfa;--chip-active-bg:rgba(167,139,250,0.13);--chip-active-border:rgba(167,139,250,0.35);--chip-active-glow:rgba(167,139,250,0.12)"
                        aria-pressed="false">
                        <span class="chip-dot" style="background:#a78bfa"></span>${t('search.filter.definitions') !== 'search.filter.definitions' ? t('search.filter.definitions') : 'Definitions'}
                    </button>
                    ${groups.map(g => {
                        const hex = g.color || '#007aff';
                        return `<button class="filter-chip" data-filter="${g.key}"
                            style="--chip-active-color:${hex};--chip-active-bg:${hex}22;--chip-active-border:${hex}55;--chip-active-glow:${hex}1a"
                            aria-pressed="false">
                            <span class="chip-dot" style="background:${hex}"></span>${g.label}
                        </button>`;
                    }).join('')}
                </div>

                <div class="search-meta fade-in-up delay-2" id="search-meta"></div>
            </div>

            <div id="search-results" class="search-results-grid"></div>
        `;

        // Bind events
        const input = document.getElementById('search-input');
        const resultsContainer = document.getElementById('search-results');
        const metaContainer = document.getElementById('search-meta');
        const clearBtn = document.getElementById('search-clear-btn');

        input.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            const query = e.target.value.trim();
            clearBtn.style.display = query ? 'flex' : 'none';

            // Hide kbd hint when typing
            const kbdHint = container.querySelector('.search-kbd-hint');
            if (kbdHint) kbdHint.style.opacity = query ? '0' : '1';

            debounceTimer = setTimeout(() => {
                handleSearch(query.toLowerCase(), resultsContainer, metaContainer);
            }, 120);
        });

        clearBtn.addEventListener('click', () => {
            input.value = '';
            clearBtn.style.display = 'none';
            const kbdHint = container.querySelector('.search-kbd-hint');
            if (kbdHint) kbdHint.style.opacity = '1';
            resultsContainer.innerHTML = '';
            metaContainer.innerHTML = '';
            showRecentSearches(resultsContainer);
            input.focus();
        });

        // Filter chips
        container.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                container.querySelectorAll('.filter-chip').forEach(c => {
                    c.classList.remove('active');
                    c.setAttribute('aria-pressed', 'false');
                });
                chip.classList.add('active');
                chip.setAttribute('aria-pressed', 'true');
                activeFilter = chip.dataset.filter;
                const query = input.value.trim().toLowerCase();
                handleSearch(query, resultsContainer, metaContainer);
            });
        });

        // Global keyboard shortcut "/" to focus search
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== input) {
                const searchView = document.getElementById('view-search');
                if (searchView && searchView.style.display !== 'none') {
                    e.preventDefault();
                    input.focus();
                }
            }
            if (e.key === 'Escape' && document.activeElement === input) {
                input.blur();
            }
        });

        // Show recent searches on load if no query
        showRecentSearches(resultsContainer);
    }

    function getAvailableGroups() {
        const t = window.i18n ? window.i18n.t : (k) => k;
        const data = (window.anatomyData || []).filter(s => s.groupKey !== 'scientist');
        const groupMap = {};
        data.forEach(item => {
            if (item.groupKey && !groupMap[item.groupKey]) {
                groupMap[item.groupKey] = {
                    key: item.groupKey,
                    label: t('group.' + item.groupKey) || item.group || item.groupKey,
                    color: item.color
                };
            }
        });
        return Object.values(groupMap);
    }

    /* ================================================
       GLOSSARY SEARCH
       ================================================ */
    function searchGlossary(query) {
        const t = window.i18n ? window.i18n.t : (k) => k;
        const glossarySections = window.glossaryData || [];
        const results = [];

        glossarySections.forEach(section => {
            const sectionTitle = t(section.titleKey) || section.titleKey;
            (section.terms || []).forEach(term => {
                const termText = t(term.termKey) || '';
                const defText = t(term.defKey) || '';

                if (!query) {
                    results.push({
                        type: 'glossary',
                        term: termText,
                        definition: defText,
                        section: sectionTitle,
                        termKey: term.termKey,
                        score: 0
                    });
                    return;
                }

                const termMatch = termText.toLowerCase().includes(query);
                const defMatch = defText.toLowerCase().includes(query);

                if (termMatch || defMatch) {
                    results.push({
                        type: 'glossary',
                        term: termText,
                        definition: defText,
                        section: sectionTitle,
                        termKey: term.termKey,
                        // Score: exact term start match gets highest priority
                        score: termText.toLowerCase().startsWith(query) ? 0 : (termMatch ? 1 : 2)
                    });
                }
            });
        });

        // Sort by relevance
        results.sort((a, b) => a.score - b.score);
        return results;
    }

    function showRecentSearches(container) {
        const t = window.i18n ? window.i18n.t : (k) => k;
        if (recentSearches.length === 0) return;

        container.innerHTML = `
            <div class="recent-searches fade-in">
                <div class="recent-header">
                    <span class="recent-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${t('search.recent') !== 'search.recent' ? t('search.recent') : 'Recent Searches'}
                    </span>
                    <button class="recent-clear" id="clear-recent">${t('search.clear_recent') !== 'search.clear_recent' ? t('search.clear_recent') : 'Clear'}</button>
                </div>
                <div class="recent-tags">
                    ${recentSearches.slice(0, 6).map(s => `<button class="recent-tag" data-query="${s}">${s}</button>`).join('')}
                </div>
            </div>
        `;

        container.querySelectorAll('.recent-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const input = document.getElementById('search-input');
                input.value = tag.dataset.query;
                input.dispatchEvent(new Event('input'));
            });
        });

        const clearRecent = document.getElementById('clear-recent');
        if (clearRecent) {
            clearRecent.addEventListener('click', () => {
                recentSearches = [];
                localStorage.setItem('recentSearches', '[]');
                container.innerHTML = '';
            });
        }
    }

    function saveRecentSearch(query) {
        if (!query || query.length < 2) return;
        recentSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 8);
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }

    function handleSearch(query, container, metaContainer) {
        const t = window.i18n ? window.i18n.t : (k) => k;
        container.innerHTML = '';
        metaContainer.innerHTML = '';

        if (!query && activeFilter === 'all') {
            showRecentSearches(container);
            return;
        }

        saveRecentSearch(query);

        // ---- Element results ----
        let elementResults = [];
        if (activeFilter !== 'glossary') {
            elementResults = (window.anatomyData || []).filter(item => {
                if (item.groupKey === 'scientist') return false;
                if (!query) return true; // Match everything if no query (will filter by activeFilter next)

                const titleMatch = item.title.toLowerCase().includes(query);
                const descMatch = item.description.toLowerCase().includes(query);
                const symbolMatch = (item.symbol || '').toLowerCase().includes(query);
                const groupMatch = (item.group || '').toLowerCase().includes(query);
                const layerMatch = item.layers && item.layers.some(layer => layer.toLowerCase().includes(query));
                const atomicMatch = String(item.atomicNumber || '').includes(query);

                return titleMatch || descMatch || symbolMatch || groupMatch || layerMatch || atomicMatch;
            });

            // Apply element group filter
            if (activeFilter !== 'all' && activeFilter !== 'glossary') {
                elementResults = elementResults.filter(item => item.groupKey === activeFilter);
            }

            // Sort
            elementResults.sort((a, b) => {
                if (!query) return (a.atomicNumber || 999) - (b.atomicNumber || 999);
                const aTitle = a.title.toLowerCase().startsWith(query) ? 0 : 1;
                const bTitle = b.title.toLowerCase().startsWith(query) ? 0 : 1;
                if (aTitle !== bTitle) return aTitle - bTitle;
                return (a.atomicNumber || 999) - (b.atomicNumber || 999);
            });
        }

        // ---- Glossary results ----
        let glossaryResults = [];
        if (activeFilter === 'all' || activeFilter === 'glossary') {
            glossaryResults = searchGlossary(query);
        }

        const totalResults = elementResults.length + glossaryResults.length;

        // Meta info
        metaContainer.innerHTML = `
            <span class="search-result-count">
                ${totalResults > 0
                    ? `<strong>${totalResults}</strong> ${t('search.results_found') !== 'search.results_found' ? t('search.results_found') : 'results found'}`
                    : ''}
            </span>
        `;

        if (totalResults === 0) {
            container.innerHTML = `
                <div class="search-empty fade-in">
                    <div class="empty-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
                            <circle cx="11" cy="11" r="8" opacity="0.3"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65" opacity="0.3"/>
                            <line x1="8" y1="8" x2="14" y2="14" stroke-width="2"/>
                            <line x1="14" y1="8" x2="8" y2="14" stroke-width="2"/>
                        </svg>
                    </div>
                    <p class="empty-text" data-i18n="search.no_results">${t('search.no_results')}</p>
                    <p class="empty-hint">${t('search.try_different') !== 'search.try_different' ? t('search.try_different') : 'Try a different keyword or remove filters'}</p>
                </div>
            `;
            return;
        }

        let cardIndex = 0;

        // ---- Render element results ----
        if (elementResults.length > 0) {
            // Section header if mixed results
            if (glossaryResults.length > 0 && activeFilter === 'all') {
                const sectionHeader = document.createElement('div');
                sectionHeader.className = 'search-section-header fade-in';
                sectionHeader.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9" opacity="0.3"/>
                    </svg>
                    <span>${t('search.section.elements') !== 'search.section.elements' ? t('search.section.elements') : 'Elements'}</span>
                    <span class="section-count">${elementResults.length}</span>
                `;
                container.appendChild(sectionHeader);
            }

            elementResults.forEach((item) => {
                const card = document.createElement('div');
                card.className = 'search-result-card fade-in';
                card.style.animationDelay = `${cardIndex * 0.04}s`;
                cardIndex++;

                const highlightedTitle = highlightMatch(item.title, query);
                const highlightedDesc = highlightMatch(truncateText(item.description, 100), query);
                const groupLabel = t('group.' + item.groupKey) || item.group || '';

                card.innerHTML = `
                    <div class="result-card-header">
                        <div class="element-badge" style="background: ${item.color}15; border-color: ${item.color}40; color: ${item.color}">
                            <span class="element-symbol">${item.symbol || item.title.charAt(0)}</span>
                            <span class="element-number">${item.atomicNumber || ''}</span>
                        </div>
                        <div class="result-card-info">
                            <h4 class="result-card-title">${highlightedTitle}</h4>
                            <span class="result-card-group" style="color: ${item.color}">${groupLabel}</span>
                        </div>
                        <svg class="result-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </div>
                    <p class="result-card-desc">${highlightedDesc}</p>
                `;

                card.addEventListener('click', () => {
                    if (window.openAnatomyDetail) {
                        window.openAnatomyDetail(item);
                    } else if (window.navigate) {
                        window.navigate('explore');
                    }
                });

                container.appendChild(card);
            });
        }

        // ---- Render glossary results ----
        if (glossaryResults.length > 0) {
            // Section header if mixed results
            if (elementResults.length > 0 && activeFilter === 'all') {
                const sectionHeader = document.createElement('div');
                sectionHeader.className = 'search-section-header fade-in';
                sectionHeader.style.animationDelay = `${cardIndex * 0.04}s`;
                sectionHeader.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                    <span>${t('search.section.definitions') !== 'search.section.definitions' ? t('search.section.definitions') : 'Definitions'}</span>
                    <span class="section-count">${glossaryResults.length}</span>
                `;
                container.appendChild(sectionHeader);
            }

            // Limit glossary results to avoid overwhelming when filter is "all"
            const maxGlossary = activeFilter === 'glossary' ? glossaryResults.length : Math.min(glossaryResults.length, 8);

            for (let i = 0; i < maxGlossary; i++) {
                const item = glossaryResults[i];
                const card = document.createElement('div');
                card.className = 'glossary-result-card fade-in';
                card.style.animationDelay = `${cardIndex * 0.04}s`;
                cardIndex++;

                const highlightedTerm = highlightMatch(item.term, query);
                const highlightedDef = highlightMatch(item.definition, query);

                card.innerHTML = `
                    <div class="glossary-card-header">
                        <div class="glossary-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                            </svg>
                        </div>
                        <div class="glossary-card-info">
                            <h4 class="glossary-card-term">${highlightedTerm}</h4>
                            <span class="glossary-card-section">${item.section}</span>
                        </div>
                    </div>
                    <p class="glossary-card-def">${highlightedDef}</p>
                `;

                card.addEventListener('click', () => {
                    if (window.navigateToGlossaryTerm) {
                        window.navigateToGlossaryTerm(item.termKey);
                    } else if (window.navigate) {
                        window.navigate('glossary');
                    }
                });

                container.appendChild(card);
            }

            // Show "more" indicator if truncated
            if (activeFilter === 'all' && glossaryResults.length > maxGlossary) {
                const moreBtn = document.createElement('button');
                moreBtn.className = 'glossary-show-more fade-in';
                moreBtn.style.animationDelay = `${cardIndex * 0.04}s`;
                moreBtn.textContent = `${t('search.show_all_definitions') !== 'search.show_all_definitions' ? t('search.show_all_definitions') : 'Show all'} ${glossaryResults.length} ${t('search.definitions_label') !== 'search.definitions_label' ? t('search.definitions_label') : 'definitions'} →`;
                moreBtn.addEventListener('click', () => {
                    // Activate glossary filter and re-search
                    const chipContainer = document.getElementById('search-filters');
                    if (chipContainer) {
                        chipContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                        const glossaryChip = chipContainer.querySelector('[data-filter="glossary"]');
                        if (glossaryChip) glossaryChip.classList.add('active');
                    }
                    activeFilter = 'glossary';
                    handleSearch(query, container, metaContainer);
                });
                container.appendChild(moreBtn);
            }
        }
    }

    function highlightMatch(text, query) {
        if (!query || !text) return text;
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    function truncateText(text, maxLen) {
        if (!text) return '';
        return text.length > maxLen ? text.substring(0, maxLen) + '…' : text;
    }
})();
