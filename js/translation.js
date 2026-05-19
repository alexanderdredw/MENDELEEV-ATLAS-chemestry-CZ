// js/translation.js

(function () {
    console.log('[Anatomy] Native Translation script loaded');

    let currentLang = 'en';
    const supportedLangs = ['en', 'ru', 'kk'];

    // Cache for loaded translation data
    const translations = {};

    // Public API
    window.i18n = {
        lang: 'en',
        t: function (key, params = {}) {
            const data = translations[currentLang];
            if (!data) return key; // Fallback if not loaded

            let text = data[key] || key;

            // Replace params {name}
            for (const [pKey, pVal] of Object.entries(params)) {
                text = text.replace(`{${pKey}}`, pVal);
            }
            return text;
        },
        setLanguage: setLanguage,
        updateDOM: function() { applyTranslations(translations[currentLang]); }
    };

    // 1. Initialize logic
    async function initTranslation() {
        createLanguageSwitcher();

        // Load saved language or default to EN
        const savedLang = localStorage.getItem('anatomy_lang');
        if (savedLang && supportedLangs.includes(savedLang)) {
            currentLang = savedLang;
        }

        // Apply initial language
        await setLanguage(currentLang);
    }

    // 2. Load and Apply Language
    async function setLanguage(lang) {
        console.log(`[Anatomy] Setting language to: ${lang}`);

        if (!translations[lang]) {
            try {
                // Add timestamp to prevent caching of old JSON files
                const fileVersion = lang === 'kk' ? 'v3' : 'v2';
                const response = await fetch(`locales/${lang}_${fileVersion}.json?v=${new Date().getTime()}`);
                if (!response.ok) throw new Error(`Failed to load ${lang}`);
                translations[lang] = await response.json();
            } catch (err) {
                console.error('[Anatomy] Translation load error:', err);
                return; // Abort if failed
            }
        }

        currentLang = lang;
        window.i18n.lang = lang;
        localStorage.setItem('anatomy_lang', lang);

        // Update DOM
        applyTranslations(translations[lang]);
        updateSwitcherState(lang);
        document.documentElement.lang = lang;

        // Update body classes for styling hooks if needed
        document.documentElement.classList.remove('lang-en', 'lang-ru', 'lang-kk');
        document.documentElement.classList.add(`lang-${lang}`);

        // Trigger custom event for components to re-render
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));

        // Explicitly trigger dynamic fact re-render if available
        if (typeof window.renderFact === 'function') {
            window.renderFact();
        }
    }

    // 3. Apply text to DOM
    function applyTranslations(data) {
        if (!data) return;
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const targetAttr = el.getAttribute('data-i18n-target');

            if (data[key]) {
                const text = data[key];

                if (targetAttr) {
                    // Handle specific attributes (placeholder, value, title, etc.)
                    if (targetAttr === 'placeholder') {
                        el.placeholder = text;
                    } else if (targetAttr === 'value') {
                        el.value = text;
                    } else if (targetAttr === 'title') {
                        el.title = text;
                    } else if (targetAttr === 'alt') {
                        el.alt = text;
                    } else {
                        // Fallback generic attribute
                        el.setAttribute(targetAttr, text);
                    }
                } else {
                    // Default: Text Content / InnerHTML
                    if (text.includes('<')) {
                        el.innerHTML = text;
                    } else {
                        el.textContent = text;
                    }
                }
            }
        });
    }

    // 4. Create Custom UI (Cyclic Toggle Button)
    function createLanguageSwitcher() {
        // Use existing button if present or create new one
        if (document.getElementById('translate-toggle')) return;

        const btn = document.createElement('button');
        btn.id = 'translate-toggle';
        btn.className = 'custom-translate-btn';
        btn.setAttribute('aria-label', 'Toggle Language');

        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span class="lang-text">EN</span>
        `;

        document.body.appendChild(btn);

        btn.addEventListener('click', () => {
            // Cycle: en -> ru -> kk -> en
            const nextMap = {
                'en': 'ru',
                'ru': 'kk',
                'kk': 'en'
            };
            const target = nextMap[currentLang] || 'en';
            setLanguage(target);
        });
    }

    function updateSwitcherState(lang) {
        const btn = document.getElementById('translate-toggle');
        if (!btn) return;

        const textSpan = btn.querySelector('.lang-text');

        // Label mapping requested by user: EN -> RU -> KZ
        const labels = {
            'en': 'EN',
            'ru': 'RU',
            'kk': 'KZ'
        };

        const nextLangMap = {
            'en': 'Russian',
            'ru': 'Kazakh',
            'kk': 'English'
        };

        textSpan.textContent = labels[lang] || 'EN';

        // Update tooltip to show what comes next
        btn.setAttribute('data-tooltip', `Switch to ${nextLangMap[lang]}`);
    }

    // Run
    // Run
    window.addEventListener('DOMContentLoaded', initTranslation);

})();
