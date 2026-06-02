/* js/components/ScientistsQuiz.js */
(function () {
    window.initScientistsQuiz = function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        renderQuizIntro(container);
    };

    // Re-render when language changes if visible
    window.addEventListener('languageChanged', () => {
        const container = document.getElementById('scientists-quiz-container');
        if (container) {
            const isIntro = container.querySelector('.quiz-intro');
            if (isIntro) {
                renderQuizIntro(container);
            } else if (container.refreshResults) {
                container.refreshResults();
            } else if (container.refreshQuiz) {
                container.refreshQuiz();
            }
        }
    });

    function renderQuizIntro(container) {
        const t = (key, fallback, params) => {
            if (!window.i18n) return fallback || key;
            const res = window.i18n.t(key, params);
            return res === key && fallback ? fallback : res;
        };
        // Re-using styles from Quiz.js
        container.innerHTML = `
            <div class="quiz-intro fade-in-up" style="text-align: center; margin-top: 2rem;">
                <h1 class="hero-title" style="font-size: 2rem;">${t('scientists.quiz.title', 'Scientists Knowledge Test')}</h1>
                <p class="hero-subtitle" style="margin-bottom: 2rem; font-size: 1.1rem;">${t('scientists.quiz.subtitle', 'Test your knowledge about the greatest minds in chemistry.')}</p>
                <button class="btn btn-primary" id="start-sci-quiz-btn">${t('quiz.start', 'Start Quiz')}</button>
            </div>
        `;

        container.querySelector('#start-sci-quiz-btn').addEventListener('click', () => {
            startQuiz(container);
        });
    }

    function startQuiz(container) {
        if (!window.anatomyData) return;
        const t = (key, fallback, params) => {
            if (!window.i18n) return fallback || key;
            const res = window.i18n.t(key, params);
            return res === key && fallback ? fallback : res;
        };

        // Filter for scientists only
        const scientists = window.anatomyData.filter(s => s.groupKey === 'scientist');
        if (scientists.length === 0) return;

        // Ensure we don't request more questions than available scientists
        const numQuestions = Math.min(10, scientists.length);
        const questionQueue = shuffleArray([...scientists]).slice(0, numQuestions);

        let currentQuestionIndex = 0;
        let score = 0;
        let incorrectIds = [];
        let questionStartTime = Date.now();
        
        let consecutiveCorrect = 0;
        let consecutiveWrong = 0;
        let currentLevel = 1; // 0: Easy, 1: Medium, 2: Hard
        
        function getLevelConfig(level) {
            if (level === 0) return { key: 'scientists.quiz.level.easy', fallback: 'Easy', color: 'var(--success)', bg: 'rgba(52, 199, 89, 0.12)', border: 'rgba(52, 199, 89, 0.3)', distractors: 1 };
            if (level === 1) return { key: 'scientists.quiz.level.medium', fallback: 'Medium', color: 'var(--accent-gold-text)', bg: 'var(--accent-gold-bg-strong)', border: 'var(--accent-gold-border)', distractors: 3 };
            return { key: 'scientists.quiz.level.hard', fallback: 'Hard', color: 'var(--accent-red)', bg: 'rgba(255, 59, 48, 0.12)', border: 'rgba(255, 59, 48, 0.3)', distractors: 3 };
        }

        function renderQuestion() {
            if (currentQuestionIndex >= questionQueue.length) {
                delete container.refreshQuiz;
                renderResults(container, score, questionQueue.length, incorrectIds);
                return;
            }

            container.refreshQuiz = () => {
                renderQuestion(true); // pass true if we want to avoid resetting timer, but just re-render is fine
            };

            questionStartTime = Date.now();
            const currentScientist = questionQueue[currentQuestionIndex];
            const levelConfig = getLevelConfig(currentLevel);
            
            // Create options: 1 correct + distractors based on level
            const distractors = scientists
                .filter(s => s.id !== currentScientist.id)
                .sort(() => Math.random() - 0.5)
                .slice(0, levelConfig.distractors);
            
            const options = shuffleArray([currentScientist, ...distractors]);

            const progressText = t('quiz.progress', 'Question {current} / {total}', { current: currentQuestionIndex + 1, total: questionQueue.length });
            // For scientists, the question will be to identify them by their description
            const questionText = t(currentScientist.descKey, currentScientist.description || 'Identify the scientist based on this description.');
            
            container.innerHTML = `
                <div class="quiz-card fade-in" style="max-width: 800px; margin: 0 auto; background: var(--bg-secondary, rgba(255,255,255,0.03)); border-radius: 20px; padding: 2rem; border: 1px solid var(--border-default, rgba(255,255,255,0.1));">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <div class="quiz-progress" style="color: var(--text-secondary); font-weight: 600;">${progressText}</div>
                        <div class="difficulty-badge" style="
                            font-size: 0.75rem; 
                            font-weight: 600; 
                            padding: 4px 12px; 
                            border-radius: 99px; 
                            background: ${levelConfig.bg}; 
                            color: ${levelConfig.color};
                            border: 1px solid ${levelConfig.border};
                            transition: all 0.3s ease;
                        ">
                            ${t(levelConfig.key, levelConfig.fallback)}
                        </div>
                    </div>
                    
                    <div class="quiz-question-container" style="margin-bottom: 2rem; text-align: center;">
                        <h3 class="quiz-question-intro" style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 800; opacity: 0.8;">${t('scientists.quiz.question_intro', 'Who is this scientist?')}</h3>
                        <p class="quiz-question-desc" style="font-size: 1.1rem; line-height: 1.6; color: var(--text-secondary);">${questionText}</p>
                    </div>

                    <div class="quiz-options">
                        ${options.map(opt => `
                            <button class="btn btn-secondary quiz-opt" data-id="${opt.id}" style="padding: 15px; font-size: 1.05rem;">
                                ${t(opt.titleKey, opt.id)}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;

            container.querySelectorAll('.quiz-opt').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    container.querySelectorAll('.quiz-opt').forEach(b => b.style.pointerEvents = 'none');

                    const selectedId = e.target.getAttribute('data-id');
                    const isCorrect = selectedId === currentScientist.id;

                    if (isCorrect) {
                        score++;
                        consecutiveCorrect++;
                        consecutiveWrong = 0;
                        if (consecutiveCorrect >= 2) {
                            currentLevel = Math.min(2, currentLevel + 1);
                            consecutiveCorrect = 0; // reset to require 2 more correct answers to level up again
                        }
                        
                        e.target.style.background = 'var(--success)';
                        e.target.style.color = '#fff';
                        e.target.style.borderColor = 'var(--success)';
                    } else {
                        consecutiveWrong++;
                        consecutiveCorrect = 0;
                        if (consecutiveWrong >= 2) {
                            currentLevel = Math.max(0, currentLevel - 1);
                            consecutiveWrong = 0; // reset to require 2 more wrong answers to level down again
                        }

                        e.target.style.background = 'var(--accent-red)';
                        e.target.style.color = '#fff';
                        e.target.style.borderColor = 'var(--accent-red)';
                        incorrectIds.push(currentScientist.id);

                        container.querySelectorAll('.quiz-opt').forEach(b => {
                            if (b.getAttribute('data-id') === currentScientist.id) {
                                b.style.background = 'var(--success)';
                                b.style.color = '#fff';
                                b.style.borderColor = 'var(--success)';
                            } else if (b !== e.target) {
                                b.style.opacity = '0.5';
                            }
                        });
                    }

                    setTimeout(() => {
                        currentQuestionIndex++;
                        renderQuestion();
                    }, 2000);
                });
            });
        }

        container.refreshQuiz = renderQuestion;
        renderQuestion();
    }

    function renderResults(container, score, total, incorrectIds = []) {
        container.refreshResults = () => renderResults(container, score, total, incorrectIds);
        delete container.refreshQuiz;
        
        const t = (key, fallback, params) => {
            if (!window.i18n) return fallback || key;
            const res = window.i18n.t(key, params);
            return res === key && fallback ? fallback : res;
        };
        const percentage = Math.round((score / total) * 100);
        let message = percentage >= 80 ? t('quiz.excellent', 'Excellent job!') : t('quiz.keep_learning', 'Keep learning!');
        let title = t('quiz.results.title', 'Quiz Complete! Score: {score}/{total}', { score: score, total: total });
        if (title === 'Quiz Complete! Score: {score}/{total}') {
            title = title.replace('{score}', score).replace('{total}', total);
        }

        const uniqueIncorrectIds = [...new Set(incorrectIds)];

        let recommendationHTML = '';
        if (uniqueIncorrectIds.length > 0) {
            recommendationHTML = `
                <div class="recommendation-section fade-in-up" style="animation-delay: 0.2s; margin-top: 2rem; width: 100%; max-width: 800px;">
                    <h3 class="hero-subtitle" style="margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 1.2rem; text-align: center;">${t('scientists.quiz.review', 'Scientists to review:')}</h3>
                    <div class="recommendation-grid" style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                        ${uniqueIncorrectIds.map(id => {
                            const sys = window.anatomyData.find(s => s.id === id);
                            if (!sys) return '';
                            return `
                                <div class="recommendation-card" data-system="${id}" style="
                                    background: var(--surface);
                                    border: 1px solid var(--border);
                                    border-radius: 12px;
                                    padding: 1rem;
                                    cursor: pointer;
                                    transition: all 0.3s ease;
                                    display: flex;
                                    align-items: center;
                                    gap: 1rem;
                                ">
                                    <div class="recommendation-icon" style="
                                        width: 40px; height: 40px; border-radius: 50%;
                                        background: rgba(253,224,71,0.1); 
                                        color: var(--accent-gold-text);
                                        display: flex; align-items: center; justify-content: center; font-weight: bold;
                                    ">${t(sys.titleKey, sys.id).charAt(0)}</div>
                                    <div style="flex: 1; text-align: left;">
                                        <h4 style="margin: 0; font-size: 1rem; color: var(--text-primary);">${t(sys.titleKey, sys.id)}</h4>
                                        <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">${t(sys.descKey, '')}</p>
                                    </div>
                                    <div style="color: var(--text-secondary); transform: rotate(-90deg);">&#10140;</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        container.innerHTML = `
            <div class="quiz-results fade-in-up" style="display: flex; flex-direction: column; align-items: center; width: 100%; text-align: center;">
                <h2 class="hero-title" style="font-size: 2.2rem;">${title}</h2>
                <p class="hero-subtitle" style="font-size: 1.2rem;">${message}</p>
                <div class="score-circle" style="
                    width: 140px; height: 140px; 
                    border-radius: 50%; 
                    border: 4px solid var(--accent-gold-border); 
                    display: flex; align-items: center; justify-content: center; 
                    font-size: 2.5rem; font-weight: bold; color: var(--accent-gold-text);
                    margin: 2rem 0;
                    box-shadow: 0 0 30px rgba(253,224,71,0.2);
                ">${percentage}%</div>
                
                ${recommendationHTML}

                <div style="margin-top: 3rem;">
                    <button class="btn btn-primary glow-effect" id="retry-sci-quiz">${t('quiz.retry', 'Try Again')}</button>
                </div>
            </div>
        `;

        container.querySelector('#retry-sci-quiz').addEventListener('click', () => renderQuizIntro(container));

        container.querySelectorAll('.recommendation-card').forEach(card => {
            card.addEventListener('click', () => {
                const systemId = card.getAttribute('data-system');
                const system = window.anatomyData.find(s => s.id === systemId);
                if (system && window.openAnatomyDetail) {
                    window.openAnatomyDetail(system);
                }
            });
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-3px)';
                card.style.borderColor = 'var(--accent-gold-border)';
                card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.borderColor = 'var(--border)';
                card.style.boxShadow = 'none';
            });
        });
    }

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
})();
