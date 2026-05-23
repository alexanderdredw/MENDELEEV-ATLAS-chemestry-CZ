/* js/components/Quiz.js */
(function () {
    window.initQuiz = function () {
        const mainContent = document.getElementById('main-content');

        let quizContainer = document.getElementById('view-learn');
        if (!quizContainer) {
            quizContainer = document.createElement('section');
            quizContainer.id = 'view-learn';
            quizContainer.className = 'quiz-section';
            quizContainer.style.display = 'none';
            mainContent.appendChild(quizContainer);
        }

        renderQuizIntro(quizContainer);
    }

    // Re-render when language changes if visible
    window.addEventListener('languageChanged', () => {
        const quizContainer = document.getElementById('view-learn');
        if (quizContainer && quizContainer.style.display !== 'none') {
            const isIntro = quizContainer.querySelector('.quiz-intro');
            if (isIntro) {
                renderQuizIntro(quizContainer);
            } else if (quizContainer.refreshQuiz) {
                quizContainer.refreshQuiz();
            }
        }
    });

    function renderQuizIntro(container) {
        // Use i18n directly in template
        const t = window.i18n ? window.i18n.t : (k) => k;

        container.innerHTML = `
            <div class="quiz-intro fade-in-up">
                <h1 class="hero-title" data-i18n="quiz.title">${t('quiz.title')}</h1>
                <p class="hero-subtitle" data-i18n="quiz.subtitle">${t('quiz.subtitle')}</p>
                <button class="btn btn-primary" id="start-quiz-btn" data-i18n="quiz.start">${t('quiz.start')}</button>
            </div>
        `;

        container.querySelector('#start-quiz-btn').addEventListener('click', () => {
            startQuiz(container);
        });
    }

    function startQuiz(container) {
        if (!window.anatomyData) return;
        const t = window.i18n ? window.i18n.t : (k) => k;

        // Adaptive State
        let currentDifficulty = 2; // 1: Easy, 2: Medium, 3: Hard
        let answerHistory = []; // Track last 5 answers for rolling accuracy
        const WINDOW_SIZE = 5;

        // Generate question ORDER only (not full question data)
        const allIds = window.anatomyData
            .filter(s => s.groupKey !== 'scientist')
            .map(s => s.id);
        const questionQueue = shuffleArray([...allIds]).slice(0, 10); // 10 Questions total

        // Start Logging
        window.DataCollector.logEvent('quiz_start', { total_questions: questionQueue.length });

        let currentQuestionIndex = 0;
        let score = 0;
        let incorrectSystemIds = [];
        let questionStartTime = Date.now();

        function getQuestionData(systemId, difficulty) {
            const system = window.getSystemById(systemId);
            let numOptions = 4;
            let useFact = false;

            if (difficulty === 1) numOptions = 2;
            else if (difficulty === 3) useFact = true;

            // Generate Distractors
            const distractorIds = allIds
                .filter(id => id !== systemId)
                .sort(() => Math.random() - 0.5)
                .slice(0, numOptions - 1);

            const optionIds = shuffleArray([systemId, ...distractorIds]);

            return {
                system,
                optionIds,
                useFact,
                difficulty
            };
        }

        function updateDifficulty(isCorrect) {
            answerHistory.push(isCorrect ? 1 : 0);
            if (answerHistory.length > WINDOW_SIZE) answerHistory.shift();

            // Calculate rolling accuracy
            const accuracy = answerHistory.reduce((a, b) => a + b, 0) / answerHistory.length;

            // Adjustment Rules
            if (answerHistory.length >= 3) { // Only adjust after a few questions
                if (accuracy >= 0.8 && currentDifficulty < 3) {
                    currentDifficulty++;
                    answerHistory = []; // Reset history after change to stabilize
                } else if (accuracy < 0.5 && currentDifficulty > 1) {
                    currentDifficulty--;
                    answerHistory = []; // Reset history after change
                }
            }
        }

        function renderQuestion() {
            if (currentQuestionIndex >= questionQueue.length) {
                window.DataCollector.logEvent('quiz_end', { final_score: score, total_questions: questionQueue.length });
                container.refreshQuiz = () => renderResults(container, score, questionQueue.length, incorrectSystemIds);
                renderResults(container, score, questionQueue.length, incorrectSystemIds);
                return;
            }

            questionStartTime = Date.now();
            const systemId = questionQueue[currentQuestionIndex];
            const qData = getQuestionData(systemId, currentDifficulty);
            const system = qData.system;

            // Localized Strings
            const difficultyLabel = t(`quiz.difficulty.${qData.difficulty === 1 ? 'easy' : qData.difficulty === 2 ? 'medium' : 'hard'}`);
            const difficultyColor = qData.difficulty === 1 ? 'var(--success)' : qData.difficulty === 2 ? 'var(--accent-gold)' : 'var(--accent-red)';

            // Question Text
            let questionText = system.description;
            // Use fact if Hard mode and factKey/fact exists
            // Note: system object in memory comes from window.anatomyData which has 'factKey' logic handled by getSystemById? 
            // Actually getSystemById returns the object from anatomy-data.js BUT with localized title/desc if we implemented that. 
            // Let's assume we need to fetch the localized fact.

            // Helper to get localized fact
            // We need to check if 'factKey' exists in the raw data or if it's already on the system object
            // The raw data has factKey. We can use t(factKey).
            const rawSystem = window.anatomyData.find(s => s.id === systemId);
            if (qData.useFact && rawSystem.factKey) {
                questionText = t(rawSystem.factKey);
            }

            // Mask the answer (title and symbol) from the question text
            if (system.title) {
                const escapedTitle = system.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const titleRegex = new RegExp(`(^|[^a-zA-Zа-яА-ЯёЁ0-9])(${escapedTitle})([^a-zA-Zа-яА-ЯёЁ0-9]|$)`, 'gi');
                questionText = questionText.replace(titleRegex, '$1___$3');
            }
            if (rawSystem && rawSystem.symbol) {
                const escapedSymbol = rawSystem.symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const symbolRegex = new RegExp(`(^|[^a-zA-Zа-яА-ЯёЁ0-9])(${escapedSymbol})([^a-zA-Zа-яА-ЯёЁ0-9]|$)`, 'g'); // Case-sensitive for symbols like N, O
                questionText = questionText.replace(symbolRegex, '$1___$3');
            }

            // Clean up boilerplate intros
            questionText = questionText.replace(/^___\s*[-—–]?\s*(is|это)?\s*(element|элемент)\s*(#|№)?\s*\d+,?\s*(a\s+|an\s+)?/i, '');
            questionText = questionText.replace(/^___\s*[-—–]?\s*(is|это)?\s*(a\s+|an\s+)?/i, '');
            
            // Capitalize first letter
            if (questionText.length > 0) {
                questionText = questionText.charAt(0).toUpperCase() + questionText.slice(1);
            }

            if (questionText.endsWith('.')) questionText = questionText.slice(0, -1);

            const questionIntro = t('quiz.question_intro');
            const progressText = t('quiz.progress', { current: currentQuestionIndex + 1, total: questionQueue.length });

            container.innerHTML = `
                <div class="quiz-card fade-in">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; width: 100%;">
                        <div class="quiz-progress">${progressText}</div>
                        <div class="difficulty-badge" style="
                            font-size: 0.75rem; 
                            font-weight: 600; 
                            padding: 4px 12px; 
                            border-radius: 99px; 
                            background: ${difficultyColor}20; 
                            color: ${difficultyColor};
                            border: 1px solid ${difficultyColor}40;
                        ">
                            ${difficultyLabel}
                        </div>
                    </div>
                    
                    <div class="quiz-question-container">
                        <h3 class="quiz-question-intro">${questionIntro}</h3>
                        <p class="quiz-question-desc">${questionText}</p>
                    </div>

                    <div class="quiz-options">
                        ${qData.optionIds.map(optId => {
                const optSystem = window.getSystemById(optId);
                return `<button class="btn btn-secondary quiz-opt" data-id="${optId}">${optSystem.title}</button>`;
            }).join('')}
                    </div>
                </div>
            `;

            container.querySelectorAll('.quiz-opt').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    // Disable interactions
                    container.querySelectorAll('.quiz-opt').forEach(b => b.style.pointerEvents = 'none');

                    const selectedId = e.target.getAttribute('data-id');
                    const isCorrect = selectedId === systemId;
                    const responseTime = Date.now() - questionStartTime;

                    // Log Answer
                    window.DataCollector.logEvent('question_answered', {
                        question_id: systemId,
                        system_id: systemId,
                        is_correct: isCorrect ? 1 : 0,
                        response_time_ms: responseTime,
                        difficulty_level: currentDifficulty, // Log difficulty
                        selected_option: selectedId
                    });

                    // Update Difficulty State
                    updateDifficulty(isCorrect);

                    if (isCorrect) {
                        score++;
                        e.target.style.background = 'var(--success)';
                        e.target.style.color = '#fff';
                        e.target.style.borderColor = 'var(--success)';
                    } else {
                        e.target.style.background = 'var(--accent-red)';
                        e.target.style.color = '#fff';
                        e.target.style.borderColor = 'var(--accent-red)';
                        incorrectSystemIds.push(systemId);

                        // Highlight correct
                        container.querySelectorAll('.quiz-opt').forEach(b => {
                            if (b.getAttribute('data-id') === systemId) {
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

        // Attach refresh hook
        container.refreshQuiz = renderQuestion;
        renderQuestion();
    }

    function renderResults(container, score, total, incorrectSystemIds = []) {
        const t = window.i18n ? window.i18n.t : (k) => k;
        const percentage = Math.round((score / total) * 100);
        let message = percentage >= 80 ? t('quiz.excellent') : t('quiz.keep_learning');
        let title = t('quiz.results.title', { score, total });

        // Deduplicate incorrect systems
        const uniqueIncorrectIds = [...new Set(incorrectSystemIds)];

        let recommendationHTML = '';
        if (uniqueIncorrectIds.length > 0) {
            recommendationHTML = `
                <div class="recommendation-section fade-in-up" style="animation-delay: 0.2s; margin-top: 2rem; width: 100%; max-width: 600px;">
                    <h3 class="hero-subtitle" style="margin-bottom: 1rem; color: var(--text-secondary); font-size: 1.2rem;">${t('quiz.recommendation.title')}</h3>
                    <div class="recommendation-grid" style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                        ${uniqueIncorrectIds.map(id => {
                const system = window.getSystemById(id);
                // Create a mini card
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
                                    position: relative;
                                    overflow: hidden;
                                ">
                                    <div class="recommendation-icon" style="
                                        width: 40px; 
                                        height: 40px; 
                                        border-radius: 50%; 
                                        background: ${system.color}20; 
                                        display: flex; 
                                        align-items: center; 
                                        justify-content: center;
                                        color: ${system.color};
                                        font-weight: bold;
                                    ">
                                        <!-- Icon or Initial -->
                                        ${system.title.charAt(0)}
                                    </div>
                                    <div class="recommendation-info" style="flex: 1;">
                                        <h4 style="margin: 0; font-size: 1rem; color: var(--text-primary);">${system.title}</h4>
                                        <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 150px;">${system.description}</p>
                                    </div>
                                    <div style="color: var(--text-secondary); transform: rotate(-90deg);">&#10140;</div>
                                </div>
                            `;
            }).join('')}
                    </div>
                </div>
            `;
        } else {
            // Perfect score or no specific mistakes tracked (maybe missed questions logic needs check if we want to track 'ignored' questions, but here we only track 'incorrect' choices)
            // Actually, if score < total but incorrectSystemIds is empty, it means they might have timed out? But this quiz doesn't have timeout yet. 
            // So if score == total, show perfect message.
            if (score === total) {
                message = t('quiz.recommendation.perfect') || message;
            } else if (percentage > 80) {
                message = t('quiz.recommendation.great_job') || message;
            }
        }

        container.innerHTML = `
            <div class="quiz-results fade-in-up" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                <h2 class="hero-title">${title}</h2>
                <p class="hero-subtitle">${message}</p>
                <div class="score-circle" style="
                    width: 120px; 
                    height: 120px; 
                    border-radius: 50%; 
                    border: 4px solid var(--primary); 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    font-size: 2rem; 
                    font-weight: bold; 
                    margin: 1.5rem 0;
                    box-shadow: 0 0 20px var(--primary-glow);
                ">
                    ${percentage}%
                </div>
                
                ${recommendationHTML}

                <div style="margin-top: 2rem;">
                    <button class="btn btn-primary" id="retry-quiz" data-i18n="quiz.retry">${t('quiz.retry')}</button>
                </div>
            </div>
        `;

        // Bind events
        container.querySelector('#retry-quiz').addEventListener('click', () => renderQuizIntro(container));

        // Bind recommendation clicks
        container.querySelectorAll('.recommendation-card').forEach(card => {
            card.addEventListener('click', () => {
                const systemId = card.getAttribute('data-system');
                const system = window.getSystemById(systemId);
                if (system && window.openAnatomyDetail) {
                    window.openAnatomyDetail(system);
                }
            });

            // Add hover effect via JS since inline styles are used
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
                card.style.borderColor = 'var(--primary)';
                card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
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
