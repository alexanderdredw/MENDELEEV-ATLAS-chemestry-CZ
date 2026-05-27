// State
const state = {
    view: 'home',
    theme: 'dark',
    currentLang: 'en'
};

document.addEventListener('DOMContentLoaded', () => {

    // Define Global Navigate Function First
    window.navigate = function (viewName) {
        state.view = viewName;
        // Scroll to top when changing views
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Update Nav Buttons
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            if (btn.dataset.view === viewName) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        // Handle Views
        const allViews = document.querySelectorAll('main > section');
        allViews.forEach(section => {
            if (section.id === `view-${viewName}`) {
                section.style.display = 'flex';
                setTimeout(() => section.classList.add('active'), 10);
            } else {
                section.style.display = 'none';
                section.classList.remove('active');
            }
        });

        // Dispatch event for components to react
        window.dispatchEvent(new CustomEvent('navigate', { detail: { view: viewName } }));
    };

    // 1. Bind UI Events FIRST so buttons always work
    const startExploringBtn = document.querySelector('.hero-actions .btn-primary');
    if (startExploringBtn) {
        startExploringBtn.addEventListener('click', () => window.navigate('explore'));
    }
    const takeQuizBtn = document.querySelector('.hero-actions .btn-secondary');
    if (takeQuizBtn) {
        takeQuizBtn.addEventListener('click', () => window.navigate('learn'));
    }

    // Logo Click Handler
    const logo = document.getElementById('app-logo');
    if (logo) {
        logo.addEventListener('click', () => {
            if (window.navigate) window.navigate('home');
        });
    }

    // Burger Menu Logic
    const burgerBtn = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (burgerBtn && mainNav) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = burgerBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            burgerBtn.setAttribute('aria-expanded', isActive);
            document.body.classList.toggle('menu-open', isActive);
        });

        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') &&
                !mainNav.contains(e.target) &&
                !burgerBtn.contains(e.target)) {
                burgerBtn.classList.remove('active');
                mainNav.classList.remove('active');
                burgerBtn.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Navigation Click Handlers
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetView = btn.dataset.view;
            window.navigate(targetView);

            if (burgerBtn && mainNav && mainNav.classList.contains('active')) {
                burgerBtn.classList.remove('active');
                mainNav.classList.remove('active');
                burgerBtn.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('theme-light');
            document.body.classList.toggle('theme-dark');
            state.theme = document.body.classList.contains('theme-light') ? 'light' : 'dark';
        });
    }

    // 2. Initialize Data-Driven Components safely
    try {
        if (window.initAnatomyViewer) window.initAnatomyViewer('view-explore');
    } catch (e) { console.error('Viewer Init Failed:', e); }

    try {
        if (window.initSearch) window.initSearch();
    } catch (e) { console.error('Search Init Failed:', e); }

    try {
        if (window.initQuiz) window.initQuiz();
    } catch (e) { console.error('Quiz Init Failed:', e); }

    try {
        if (window.initAnalytics) window.initAnalytics();
    } catch (e) { console.error('Analytics Init Failed:', e); }

    try {
        if (window.initSyntaraAI) window.initSyntaraAI();
    } catch (e) { console.error('Syntara Init Failed:', e); }

    try {
        if (window.initKnowledgeMap) {
            setTimeout(window.initKnowledgeMap, 200);
        }
    } catch (e) { console.error('Knowledge Map Init Failed:', e); }

    // 3. Visual Effects
    try {
        if (window.initParticles) {
            window.initParticles('view-home');
            window.initParticles('view-about');
        }
    } catch (e) { console.error('Effects Init Failed:', e); }

    // 4. Random Fun Fact Generator
    const factElement = document.getElementById('daily-fact');

    function renderFact() {
        if (!factElement) return;

        if (window.anatomyData && Array.isArray(window.anatomyData)) {
            const facts = window.anatomyData.filter(s => s.fact).map(s => s.fact);
            if (facts.length > 0) {
                const randomFact = facts[Math.floor(Math.random() * facts.length)];
                factElement.innerHTML = randomFact;
            } else {
                factElement.innerHTML = "Did you know? The human body is amazing!";
            }
        } else {
            factElement.innerHTML = "Loading anatomy fact...";
        }
    }
    window.renderFact = renderFact;

    // 5. Glossary Rendering
    function renderGlossary() {
        const glossaryContainer = document.querySelector('.glossary-content');
        if (!glossaryContainer || !window.glossaryData) return;

        glossaryContainer.innerHTML = '';
        const quickNav = document.createElement('div');
        quickNav.className = 'glossary-quick-nav';
        glossaryContainer.appendChild(quickNav);

        window.glossaryData.forEach((section, index) => {
            const sectionId = `glossary-section-${index}`;
            const navLink = document.createElement('a');
            navLink.href = `#${sectionId}`;
            navLink.className = 'glossary-nav-chip';
            navLink.setAttribute('data-i18n', section.titleKey);
            navLink.textContent = getTranslation(section.titleKey);
            navLink.onclick = (e) => {
                e.preventDefault();
                const target = document.getElementById(sectionId);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            quickNav.appendChild(navLink);

            const sectionWrapper = document.createElement('div');
            sectionWrapper.className = 'glossary-section-wrapper';
            sectionWrapper.id = sectionId;

            const sectionTitle = document.createElement('h3');
            sectionTitle.className = 'glossary-section-title';
            sectionTitle.setAttribute('data-i18n', section.titleKey);
            sectionTitle.textContent = getTranslation(section.titleKey);
            sectionWrapper.appendChild(sectionTitle);

            const dl = document.createElement('dl');
            dl.className = 'glossary-list';
            section.terms.forEach(item => {
                // Wrap each term-def pair in a div for highlighting
                const termWrapper = document.createElement('div');
                termWrapper.className = 'glossary-term-pair';
                termWrapper.id = `gterm-${item.termKey.replace(/\./g, '-')}`;

                const dt = document.createElement('dt');
                dt.setAttribute('data-i18n', item.termKey);
                dt.textContent = getTranslation(item.termKey);
                const dd = document.createElement('dd');
                dd.setAttribute('data-i18n', item.defKey);
                dd.textContent = getTranslation(item.defKey);
                termWrapper.appendChild(dt);
                termWrapper.appendChild(dd);
                dl.appendChild(termWrapper);
            });
            sectionWrapper.appendChild(dl);
            glossaryContainer.appendChild(sectionWrapper);
        });
    }

    /**
     * Navigate to glossary and scroll to + highlight a specific term.
     * Called from Search when user clicks a glossary result.
     * @param {string} termKey - e.g. "glossary.term.21"
     */
    window.navigateToGlossaryTerm = function (termKey) {
        // 1. Navigate to glossary view
        window.navigate('glossary');

        // 2. Build the element ID from the termKey
        const targetId = `gterm-${termKey.replace(/\./g, '-')}`;

        // 3. Scroll to top first to reset viewport
        window.scrollTo({ top: 0, behavior: 'instant' });

        // 4. Wait for the view to fully render and paint, then scroll to term
        function attemptScroll(retries) {
            const targetEl = document.getElementById(targetId);
            if (!targetEl) {
                if (retries > 0) {
                    setTimeout(() => attemptScroll(retries - 1), 200);
                }
                return;
            }

            // Remove any previous highlights
            document.querySelectorAll('.glossary-term-pair.search-spotlight').forEach(el => {
                el.classList.remove('search-spotlight');
            });

            // Calculate position and scroll
            requestAnimationFrame(() => {
                const headerOffset = 110;
                const rect = targetEl.getBoundingClientRect();
                const absoluteTop = rect.top + window.pageYOffset;
                window.scrollTo({
                    top: absoluteTop - headerOffset,
                    behavior: 'smooth'
                });

                // Add highlight class after scroll animation completes
                setTimeout(() => {
                    targetEl.classList.add('search-spotlight');

                    // Auto-remove highlight after 5 seconds with fade-out
                    setTimeout(() => {
                        targetEl.classList.remove('search-spotlight');
                    }, 5000);
                }, 600);
            });
        }

        // Start attempt after view transition completes
        setTimeout(() => attemptScroll(5), 350);
    };

    function getTranslation(key) {
        if (window.i18n && window.i18n.t) return window.i18n.t(key);
        return key;
    }

    // 6. Language Handling
    window.addEventListener('languageChanged', (e) => {
        state.currentLang = e.detail.lang;
        if (typeof renderFact === 'function') renderFact();
        if (typeof initKnowledgeMap === 'function') initKnowledgeMap();
        if (typeof renderGlossary === 'function') renderGlossary();
        if (window.i18n && window.i18n.updateDOM) window.i18n.updateDOM();
    });

    if (window.i18n && window.i18n.lang) {
        state.currentLang = window.i18n.lang;
        setTimeout(renderFact, 100);
    }

    // Initial Render
    if (window.glossaryData) renderGlossary();
    if (factElement) renderFact();
    if (window.i18n && window.i18n.updateDOM) window.i18n.updateDOM();

    // Dual-Profile Toggle Logic — smooth height-measured animation
    const profileToggles = document.querySelectorAll('.profile-toggle-btn');

    // Pre-calculate collapsed preview heights (3 lines worth)
    profileToggles.forEach(btn => {
        const card = btn.closest('.profile-card');
        const preview = card.querySelector('.profile-preview');
        if (preview) {
            // Compute 3-line height: line-height * 3
            const lineHeight = parseFloat(getComputedStyle(preview).lineHeight);
            const collapsedHeight = Math.ceil(lineHeight * 3);
            preview.dataset.collapsedHeight = collapsedHeight;
            preview.style.maxHeight = collapsedHeight + 'px';
        }
    });

    profileToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.profile-card');
            const expandedPanel = card.querySelector('.profile-expanded');
            const preview = card.querySelector('.profile-preview');
            const btnText = btn.querySelector('.btn-text');
            const isCurrentlyExpanded = card.classList.contains('expanded');

            // Guard: if animation is in progress, ignore click
            if (expandedPanel.dataset.animating === 'true') return;
            expandedPanel.dataset.animating = 'true';

            if (!isCurrentlyExpanded) {
                // EXPAND
                card.classList.add('expanded');

                // Animate preview text to full height
                if (preview) {
                    preview.style.transition = 'none';
                    preview.style.maxHeight = 'none';
                    const fullPreviewHeight = preview.scrollHeight;
                    preview.style.maxHeight = preview.dataset.collapsedHeight + 'px';
                    preview.offsetHeight;
                    preview.style.transition = '';
                    preview.style.maxHeight = fullPreviewHeight + 'px';
                }

                // Animate expanded panel
                expandedPanel.style.transition = 'none';
                expandedPanel.style.maxHeight = 'none';
                const fullHeight = expandedPanel.scrollHeight;
                expandedPanel.style.maxHeight = '0px';
                expandedPanel.offsetHeight;
                expandedPanel.style.transition = '';
                expandedPanel.style.maxHeight = fullHeight + 'px';

                expandedPanel.addEventListener('transitionend', function handler(e) {
                    if (e.propertyName !== 'max-height') return;
                    expandedPanel.style.maxHeight = 'none';
                    if (preview) preview.style.maxHeight = 'none';
                    expandedPanel.dataset.animating = 'false';
                    expandedPanel.removeEventListener('transitionend', handler);
                });
            } else {
                // COLLAPSE

                // Animate preview text back to 3 lines
                if (preview) {
                    const fullPreviewHeight = preview.scrollHeight;
                    preview.style.transition = 'none';
                    preview.style.maxHeight = fullPreviewHeight + 'px';
                    preview.offsetHeight;
                    preview.style.transition = '';
                    preview.style.maxHeight = preview.dataset.collapsedHeight + 'px';
                }

                // Animate expanded panel to 0
                const fullHeight = expandedPanel.scrollHeight;
                expandedPanel.style.transition = 'none';
                expandedPanel.style.maxHeight = fullHeight + 'px';
                expandedPanel.offsetHeight;
                expandedPanel.style.transition = '';
                card.classList.remove('expanded');
                expandedPanel.style.maxHeight = '0px';

                expandedPanel.addEventListener('transitionend', function handler(e) {
                    if (e.propertyName !== 'max-height') return;
                    expandedPanel.style.maxHeight = '';
                    expandedPanel.dataset.animating = 'false';
                    expandedPanel.removeEventListener('transitionend', handler);
                });
            }

            if (btnText && window.i18n && window.i18n.t) {
                const key = isCurrentlyExpanded ? 'about.profiles.btn.show_more' : 'about.profiles.btn.show_less';
                btnText.textContent = window.i18n.t(key);
                btnText.setAttribute('data-i18n', key);
            }
        });
    });

    // Glossary Scroll-to-Top Button Logic
    const glossaryScrollBtn = document.getElementById('glossary-scroll-top-btn');
    if (glossaryScrollBtn) {
        const updateGlossaryScrollBtn = () => {
            if (state.view !== 'glossary' || window.scrollY <= 300) {
                glossaryScrollBtn.classList.remove('visible');
            } else {
                glossaryScrollBtn.classList.add('visible');
            }
        };

        window.addEventListener('scroll', updateGlossaryScrollBtn);
        window.addEventListener('navigate', updateGlossaryScrollBtn);

        glossaryScrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
