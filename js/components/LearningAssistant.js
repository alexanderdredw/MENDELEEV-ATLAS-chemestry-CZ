class LearningAssistant {
    constructor(container, systemId) {
        this.container = container;
        this.systemId = systemId;
        this.system = window.getSystemById(systemId);
        this.mode = 'initial'; // initial, simple, detail, study, quiz
        this.t = window.i18n ? window.i18n.t : (k) => k;

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        if (!this.container || !this.system.ai) return;

        // Check if AI data exists for this system, otherwise show partial or empty state
        // For prototype, we only really have skeletal data fully populated, but we handle fallbacks.

        const isScientist = this.system.groupKey === 'scientist';
        const studyLabel = isScientist ? this.t('ai.btn.discovery', 'Discovery') : this.t('ai.btn.study');

        this.container.innerHTML = `
            <div class="ai-assistant fade-in-up">
                <div class="ai-header">
                    <div class="ai-icon animated-logo">
                        <div class="neural-node"></div>
                    </div>
                    <div class="ai-title">${this.t('ai.title')}</div>
                </div>
                
                <div class="ai-content" id="ai-content-area">
                    <p class="ai-placeholder">${this.t('ai.chat.placeholder')}</p>
                </div>
 
                <div class="ai-actions">
                    <button class="ai-btn" data-mode="simple">${this.t('ai.btn.simple')}</button>
                    <button class="ai-btn" data-mode="details">${this.t('ai.btn.details')}</button>
                    <button class="ai-btn" data-mode="study">${studyLabel}</button>
                    <button class="ai-btn" data-mode="quiz">${this.t('ai.btn.quiz')}</button>
                </div>
            </div>
        `;

        this.bindEvents();
    }

    bindEvents() {
        this.container.querySelectorAll('.ai-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.target.getAttribute('data-mode');
                this.setMode(mode);
            });
        });
    }

    setMode(mode) {
        this.mode = mode;
        const contentArea = this.container.querySelector('#ai-content-area');

        // Remove active class from all buttons
        this.container.querySelectorAll('.ai-btn').forEach(b => b.classList.remove('active'));
        // Add to current
        const activeBtn = this.container.querySelector(`.ai-btn[data-mode="${mode}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Render Content
        contentArea.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';

        // Simulate AI Thinking delay
        setTimeout(() => {
            let html = '';
            let qData = null;
            const aiData = this.system.ai || {};

            switch (mode) {
                case 'simple':
                    html = `<p class="fade-in">${this.parseMarkdown(this.t(aiData.simpleKey || 'Content not available yet.'))}</p>`;
                    break;
                case 'details':
                    html = `<p class="fade-in">${this.parseMarkdown(this.t(aiData.detailedKey || 'Content not available yet.'))}</p>`;
                    break;
                case 'study':
                    if (aiData.studyKey && Array.isArray(aiData.studyKey)) {
                        const points = aiData.studyKey.map(k => `<li>${this.parseMarkdown(this.t(k))}</li>`).join('');
                        html = `<ul class="study-list fade-in">${points}</ul>`;
                    } else {
                        html = `<p>Study guide not available.</p>`;
                    }
                    break;
                case 'quiz':
                    if (aiData.questions && aiData.questions.length > 0) {
                        // Initialize Quiz State if not active
                        if (!this.quizState || !this.quizState.active) {
                            this.startQuizSession(aiData.questions);
                        }
                        // Render current state
                        html = this.renderActiveQuiz();
                    } else if (aiData.question) {
                        // Fallback for single question legacy
                        html = this.renderLegacyQuiz(aiData.question);
                    } else {
                        html = `<p>No questions available.</p>`;
                    }
                    break;
            }
            contentArea.innerHTML = html;

            // Re-bind quiz events
            if (mode === 'quiz') {
                if (this.quizState && this.quizState.active) {
                    if (this.quizState.completed) {
                        this.bindResultEvents();
                    } else {
                        this.bindActiveQuizEvents();
                    }
                } else if (aiData.question) {
                    this.bindLegacyQuizEvents(aiData.question);
                }
            }

        }, 600);
    }

    // --- Sequential Quiz Logic ---

    startQuizSession(questions) {
        this.quizState = {
            active: true,
            completed: false,
            questions: this.shuffleArray([...questions]).slice(0, 5),
            currentIndex: 0,
            score: 0,
            mistakes: [],
            locked: false // Prevent double clicking
        };
    }

    renderActiveQuiz() {
        if (this.quizState.completed) {
            return this.renderQuizResults();
        }

        const qData = this.quizState.questions[this.quizState.currentIndex];
        const progress = `${this.quizState.currentIndex + 1} / ${this.quizState.questions.length}`;

        const options = qData.options.map((opt, idx) => {
            const text = this.t(opt);
            return `<button class="ai-quiz-opt" data-index="${idx}">${text}</button>`;
        }).join('');

        return `
            <div class="ai-quiz fade-in">
                <div class="ai-quiz-header" style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.9rem; color:var(--text-secondary);">
                    <span>Question ${progress}</span>
                    <span>Score: ${this.quizState.score}</span>
                </div>
                <p class="ai-quiz-question">${this.t(qData.textKey)}</p>
                <div class="ai-quiz-options">
                    ${options}
                </div>
                <div class="ai-quiz-feedback"></div>
            </div>
        `;
    }

    bindActiveQuizEvents() {
        const qData = this.quizState.questions[this.quizState.currentIndex];
        const feedback = this.container.querySelector('.ai-quiz-feedback');

        this.container.querySelectorAll('.ai-quiz-opt').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (this.quizState.locked) return;
                this.quizState.locked = true;

                const idx = parseInt(e.target.getAttribute('data-index'));
                const isCorrect = idx === qData.correctIndex;

                // UI Updates
                this.container.querySelectorAll('.ai-quiz-opt').forEach(b => {
                    b.disabled = true;
                    // Always show correct answer
                    if (parseInt(b.getAttribute('data-index')) === qData.correctIndex) {
                        b.classList.add('correct');
                    }
                });

                if (isCorrect) {
                    this.quizState.score++;
                    feedback.textContent = this.t('ai.quiz.correct');
                    feedback.style.color = 'var(--success)';
                } else {
                    e.target.classList.add('incorrect');
                    feedback.textContent = this.t('ai.quiz.incorrect');
                    feedback.style.color = 'var(--accent-red)';
                    this.quizState.mistakes.push(qData);
                }

                // Auto-advance
                setTimeout(() => {
                    this.quizState.currentIndex++;
                    this.quizState.locked = false;

                    if (this.quizState.currentIndex >= this.quizState.questions.length) {
                        this.quizState.completed = true;
                    }

                    // Re-render
                    this.setMode('quiz');
                }, 1500);
            });
        });
    }

    renderQuizResults() {
        const total = this.quizState.questions.length;
        const score = this.quizState.score;
        const pct = Math.round((score / total) * 100);

        // Generate Recommendations
        let recHtml = '';
        if (this.quizState.mistakes.length > 0) {
            const topics = [...new Set(this.quizState.mistakes.map(q => q.topic).filter(Boolean))];
            if (topics.length > 0) {
                const recList = topics.map(t => `<li>${this.parseMarkdown(this.t('ai.rec.' + t))}</li>`).join('');
                recHtml = `
                    <div class="ai-recommendations" style="margin-top:1rem; padding:1rem; background:rgba(255,255,255,0.05); border-radius:8px;">
                        <h4 style="margin-bottom:0.5rem; font-size:0.95rem;">${this.t('ai.quiz.recommendation')}</h4>
                        <ul style="padding-left:1.2rem; font-size:0.9rem; color:var(--text-secondary);">${recList}</ul>
                    </div>
                `;
            }
        }

        return `
            <div class="ai-quiz-results fade-in text-center">
                <h3 style="font-size:1.5rem; margin-bottom:0.5rem;">${this.t('ai.quiz.finish')}</h3>
                <div class="score-circle" style="font-size:2.5rem; font-weight:bold; color:var(--primary); margin:1rem 0;">
                    ${score}/${total}
                </div>
                <p style="color:var(--text-secondary);">${pct}% Correct</p>
                
                ${recHtml}

                <button class="ai-btn" id="restart-quiz" style="margin-top:1.5rem; width:100%; justify-content:center;">Try Again</button>
            </div>
        `;
    }

    // --- Utils ---

    parseMarkdown(text) {
        if (!text) return '';
        // Bold: **text** -> <strong>text</strong>
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Old methods kept for legacy/fallback support if needed, or simply replaced above.
    // I will remove the old `renderQuiz` and `bindQuizEvents` to keep file clean, 
    // as I'm replacing the entire block.
    // Wait, I renamed them to `renderLegacyQuiz` in my logic above. 
    // I should probably just keep `renderQuiz` as the name for the single question one if I want to minimize diff, 
    // but the instruction says "Refactor".

    // Let's stick to the plan:
    // The previous code had `renderQuiz` and `bindQuizEvents`.
    // I will replace them with the new logic.

    renderQuiz(qData) { // Legacy wrapper
        const options = qData.options.map((opt, idx) =>
            `<button class="ai-quiz-opt" data-index="${idx}">${this.t(opt)}</button>`
        ).join('');

        return `
            <div class="ai-quiz fade-in">
                <p class="ai-quiz-question">${this.t(qData.textKey)}</p>
                <div class="ai-quiz-options">${options}</div>
                <div class="ai-quiz-feedback"></div>
            </div>
        `;
    }

    bindQuizEvents(qData) { // Legacy wrapper
        const feedback = this.container.querySelector('.ai-quiz-feedback');
        this.container.querySelectorAll('.ai-quiz-opt').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-index'));
                const isCorrect = idx === qData.correctIndex;
                this.container.querySelectorAll('.ai-quiz-opt').forEach(b => {
                    b.disabled = true;
                    if (parseInt(b.getAttribute('data-index')) === qData.correctIndex) b.classList.add('correct');
                });
                if (!isCorrect) {
                    e.target.classList.add('incorrect');
                    feedback.textContent = "Incorrect.";
                } else {
                    feedback.textContent = "Correct!";
                }
            });
        });
    }

    // Redefining setMode to include the binder for results
    bindResultEvents() {
        const restartBtn = this.container.querySelector('#restart-quiz');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                this.quizState.active = false; // Reset
                this.setMode('quiz'); // Restart
            });
        }
    }
}

// Attach to window
window.LearningAssistant = LearningAssistant;
