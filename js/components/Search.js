/* js/components/Search.js */
(function () {
    window.initSearch = function () {
        const t = window.i18n ? window.i18n.t : (k) => k;

        // Find existing container from index.html
        const searchContainer = document.getElementById('view-search');

        if (searchContainer) {
            // Check if already initialized
            // Note: We need to re-render if language changes, so we might want to clear it
            // For now, let's just ensure structure.
            if (!searchContainer.querySelector('.search-container')) {
                searchContainer.className = 'search-section';
                renderSearchUI(searchContainer);
            }
        } else {
            console.error('Search view container #view-search not found!');
            return;
        }

        // Event listener setup is done inside render to ensure fresh references
    }

    // Re-render on language change
    window.addEventListener('languageChanged', () => {
        const searchContainer = document.getElementById('view-search');
        if (searchContainer && searchContainer.innerHTML !== '') {
            renderSearchUI(searchContainer);
        }
    });

    function renderSearchUI(container) {
        const t = window.i18n ? window.i18n.t : (k) => k;

        container.innerHTML = `
            <div class="search-container">
                <h2 class="section-title fade-in-up" data-i18n="search.title">${t('search.title')}</h2>
                <input type="text" id="anatomy-search-input" placeholder="${t('search.placeholder')}" autofocus>
                <div id="search-results" class="search-results"></div>
            </div>
        `;

        const input = document.getElementById('anatomy-search-input');
        const resultsContainer = document.getElementById('search-results');

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            handleSearch(query, resultsContainer);
        });
    }

    function handleSearch(query, container) {
        const t = window.i18n ? window.i18n.t : (k) => k;
        container.innerHTML = '';
        if (!query) return;

        // anatomyData getters automatically return translated text now!
        const results = (window.anatomyData || []).filter(item => {
            return item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.layers.some(layer => layer.toLowerCase().includes(query));
        });

        if (results.length === 0) {
            container.innerHTML = `<p class="no-results fade-in" data-i18n="search.no_results">${t('search.no_results')}</p>`;
            return;
        }

        results.forEach((item, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item fade-in';
            resultItem.style.animationDelay = `${index * 0.05}s`;

            resultItem.innerHTML = `
                <div class="result-icon" style="background: ${item.color}"></div>
                <div class="result-info">
                    <h4>${item.title}</h4>
                    <p class="truncate">${item.description}</p>
                </div>
                <span class="arrow">&rarr;</span>
            `;

            resultItem.addEventListener('click', () => {
                if (window.openAnatomyDetail) {
                    window.openAnatomyDetail(item);
                } else {
                    if (window.navigate) window.navigate('explore');
                }
            });

            container.appendChild(resultItem);
        });
    }
})();
