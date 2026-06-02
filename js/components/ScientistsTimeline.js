/* js/components/ScientistsTimeline.js */
(function () {
    let timelineContainer = null;
    let gridContainer = null;

    window.initScientistsTimeline = function (timelineId, gridId) {
        timelineContainer = document.getElementById(timelineId);
        gridContainer = document.getElementById(gridId);
        if (!timelineContainer || !gridContainer) return;

        renderScientists();
    };

    // Auto-init when navigating to scientists view
    window.addEventListener('navigate', (e) => {
        if (e.detail.view === 'scientists') {
            // Short delay to ensure DOM is ready
            setTimeout(() => {
                window.initScientistsTimeline('timeline-container', 'scientists-grid');
                if (window.initScientistsQuiz) {
                    window.initScientistsQuiz('scientists-quiz-container');
                }
            }, 50);
        }
    });

    // Handle language changes
    window.addEventListener('languageChanged', () => {
        const currentView = document.querySelector('.nav-btn.active')?.dataset.view;
        if (currentView === 'scientists') {
            renderScientists();
        }
    });

    function t(key, fallback) {
        return (window.i18n && window.i18n.t(key)) || fallback || key;
    }

    function renderScientists() {
        if (!timelineContainer || !gridContainer) return;

        const scientists = (window.anatomyData || []).filter(s => s.groupKey === 'scientist');
        // Sort by atomicNumber (which we use as discovery year)
        scientists.sort((a, b) => (a.atomicNumber || 0) - (b.atomicNumber || 0));

        renderTimeline(scientists);
        renderGrid(scientists);
    }

    function renderTimeline(scientists) {
        timelineContainer.innerHTML = '';
        
        const timelineWrapper = document.createElement('div');
        timelineWrapper.className = 'timeline-wrapper';
        timelineWrapper.style.cssText = `
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            position: relative;
            padding: 60px 40px;
            margin: 20px 0;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            scroll-behavior: smooth;
        `;

        const line = document.createElement('div');
        line.style.cssText = `
            position: absolute;
            top: 85px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, rgba(253, 224, 71, 0), rgba(253, 224, 71, 0.5) 20%, rgba(253, 224, 71, 0.5) 80%, rgba(253, 224, 71, 0));
            z-index: 1;
        `;
        timelineWrapper.appendChild(line);

        scientists.forEach((sci, index) => {
            const pointContainer = document.createElement('div');
            pointContainer.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 2;
                cursor: pointer;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                min-width: 160px;
                position: relative;
                padding-top: ${index % 2 === 0 ? '0' : '45px'};
            `;

            const yearLabel = document.createElement('span');
            yearLabel.style.cssText = `
                font-size: 0.75rem;
                font-weight: 800;
                color: var(--accent-gold-text);
                margin-bottom: 10px;
                font-family: 'Space Grotesk', sans-serif;
                letter-spacing: 0.05em;
                opacity: 0.8;
            `;
            yearLabel.textContent = sci.atomicNumber;

            const dot = document.createElement('div');
            dot.style.cssText = `
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: var(--accent-gold-border);
                border: 3px solid var(--bg-primary);
                box-shadow: 0 0 15px rgba(253, 224, 71, 0.4);
                transition: all 0.3s ease;
                margin-bottom: 12px;
            `;

            const nameLabel = document.createElement('span');
            nameLabel.style.cssText = `
                font-size: 0.85rem;
                font-weight: 600;
                color: var(--text-primary);
                text-align: center;
                white-space: nowrap;
                transition: all 0.3s ease;
            `;
            // Take only the last name for the timeline label
            const nameParts = t(sci.titleKey, sci.id).split(' ');
            nameLabel.textContent = nameParts[nameParts.length - 1];

            pointContainer.appendChild(yearLabel);
            pointContainer.appendChild(dot);
            pointContainer.appendChild(nameLabel);

            pointContainer.addEventListener('mouseenter', () => {
                dot.style.transform = 'scale(1.4)';
                dot.style.boxShadow = '0 0 25px rgba(253, 224, 71, 0.8)';
                nameLabel.style.color = 'var(--accent-gold-text)';
            });

            pointContainer.addEventListener('mouseleave', () => {
                dot.style.transform = 'scale(1)';
                dot.style.boxShadow = '0 0 15px rgba(253, 224, 71, 0.4)';
                nameLabel.style.color = 'var(--text-primary)';
            });

            pointContainer.addEventListener('click', () => {
                if (window.openAnatomyDetail) window.openAnatomyDetail(sci);
            });

            timelineWrapper.appendChild(pointContainer);
        });

        timelineContainer.appendChild(timelineWrapper);
    }

    function renderGrid(scientists) {
        gridContainer.innerHTML = '';
        scientists.forEach(sci => {
            const card = createScientistCard(sci);
            gridContainer.appendChild(card);
        });
    }

    // Generate initials from scientist name for avatar
    function getInitials(sci) {
        const name = t(sci.titleKey, sci.id);
        const parts = name.trim().split(/\s+/);
        if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        return name.slice(0, 2).toUpperCase();
    }

    // Create premium SVG portrait placeholder
    function createPortraitPlaceholder(sci) {
        const initials = getInitials(sci);
        return `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <defs>
                    <radialGradient id="bg_${sci.id}" cx="50%" cy="40%" r="60%">
                        <stop offset="0%" stop-color="#1a1400" />
                        <stop offset="100%" stop-color="#000000" />
                    </radialGradient>
                    <radialGradient id="glow_${sci.id}" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#FDE047" stop-opacity="0.15"/>
                        <stop offset="100%" stop-color="#FDE047" stop-opacity="0"/>
                    </radialGradient>
                    <clipPath id="circle_${sci.id}">
                        <circle cx="100" cy="78" r="38"/>
                    </clipPath>
                </defs>
                <!-- Background -->
                <rect width="200" height="200" fill="url(#bg_${sci.id})"/>
                <!-- Ambient glow -->
                <ellipse cx="100" cy="100" rx="90" ry="90" fill="url(#glow_${sci.id})"/>
                <!-- Silhouette body -->
                <ellipse cx="100" cy="165" rx="55" ry="35" fill="#FDE047" fill-opacity="0.08"/>
                <path d="M55 200 Q100 150 145 200 Z" fill="#FDE047" fill-opacity="0.06"/>
                <!-- Silhouette head circle with gold border -->
                <circle cx="100" cy="78" r="40" fill="#0d0b00" stroke="#FDE047" stroke-width="1.5" stroke-opacity="0.4"/>
                <!-- Initials -->
                <text x="100" y="87" text-anchor="middle" dominant-baseline="middle"
                    font-family="'Space Grotesk', 'Inter', sans-serif"
                    font-size="24" font-weight="800" fill="#FDE047" fill-opacity="0.9"
                    letter-spacing="-1">${initials}</text>
                <!-- Decorative arc -->
                <path d="M 40 140 Q 100 120 160 140" stroke="#FDE047" stroke-width="0.5" fill="none" stroke-opacity="0.3"/>
                <!-- Subtle dots -->
                <circle cx="100" cy="140" r="1.5" fill="#FDE047" fill-opacity="0.5"/>
                <circle cx="82" cy="143" r="1" fill="#FDE047" fill-opacity="0.3"/>
                <circle cx="118" cy="143" r="1" fill="#FDE047" fill-opacity="0.3"/>
            </svg>
        `;
    }

    function createScientistCard(sci) {
        const card = document.createElement('div');
        card.className = 'anatomy-card scientist-card fade-in-up';
        card.style.borderColor = '#FDE04740';

        const imgFitStyle = 'object-fit:contain; background:transparent;';

        // Portrait visual: load clean image if available, otherwise show SVG placeholder
        const portraitHtml = `
            <div class="sci-portrait-wrap" style="
                position:absolute;top:0;left:0;width:100%;height:100%;
                overflow:hidden;
            ">
                ${sci.image ? `
                    <div class="sci-portrait-placeholder" style="
                        position:absolute;top:0;left:0;width:100%;height:100%;
                    "></div>
                    <img class="sci-portrait-blur-bg" src="${sci.image}"
                        style="position:absolute;top:-10%;left:-10%;width:120%;height:120%;
                        object-fit:cover;
                        filter:blur(20px) brightness(0.4);
                        opacity:0.8;">
                    <img class="sci-portrait-img" src="${sci.image}"
                        alt="${t(sci.titleKey, sci.id)}"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;
                        ${imgFitStyle}
                        opacity:0.9;
                        transition: opacity 0.7s ease;">
                ` : `
                    <div class="sci-portrait-placeholder" style="
                        position:absolute;top:0;left:0;width:100%;height:100%;
                    ">
                        ${createPortraitPlaceholder(sci)}
                    </div>
                `}
            </div>
        `;

        card.innerHTML = `
            <div class="card-visual" style="border-color:var(--accent-gold-border); overflow:hidden; position:relative;">
                ${portraitHtml}
                <div class="group-tag" style="
                    position:absolute;top:10px;right:10px;z-index:3;
                    background:var(--accent-gold-bg-strong);border:1px solid var(--accent-gold-border);
                    color:var(--accent-gold-text);font-size:0.65rem;font-weight:700;
                    padding:4px 10px;border-radius:999px;white-space:nowrap;
                    backdrop-filter:blur(8px);
                ">${t('group.scientist', 'Учёные')}</div>
                <div class="visual-placeholder" style="
                    background:radial-gradient(circle at 50% 30%, var(--accent-gold-bg-strong) 0%, transparent 70%);
                    opacity:1; pointer-events:none; z-index:1;
                "></div>
            </div>
            <div class="card-content" style="padding: 20px;">
                <h3 class="card-title" style="font-size: 1.2rem; margin-bottom: 8px;">${t(sci.titleKey, sci.id)}</h3>
                <p class="card-desc" style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; height: 3.5em; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${t(sci.descKey, '')}</p>
            </div>
            <div class="card-actions" style="padding: 0 20px 20px;">
                <button class="btn-text" style="color: var(--accent-gold-text); font-weight: 600; font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                    ${t('detail.explore', 'Explore')} 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
            </div>
        `;

        // Smart image loading: handle fallback if loading fails
        const realImg = card.querySelector('.sci-portrait-img');
        if (realImg) {
            realImg.addEventListener('load', () => {
                realImg.style.opacity = '0.9';
            });
            realImg.addEventListener('error', () => {
                const wrap = card.querySelector('.sci-portrait-wrap');
                if (wrap) {
                    wrap.innerHTML = `
                        <div class="sci-portrait-placeholder" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                            ${createPortraitPlaceholder(sci)}
                        </div>
                    `;
                }
            });
        }

        card.addEventListener('click', () => {
            if (window.openAnatomyDetail) window.openAnatomyDetail(sci);
        });

        // Hover: reveal portrait more
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('.sci-portrait-img');
            if (img) img.style.opacity = '1.0';
        });
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('.sci-portrait-img');
            if (img) img.style.opacity = '0.9';
        });

        return card;
    }
})();
