/* js/components/SyntaraAI.js */
(function () {
    window.initSyntaraAI = function () {
        const container = document.getElementById('view-syntara');
        if (!container) return;

        // Initialize Interactions
        setupInteractions(container);
        
        // Update the Adaptive Learning Preview Stats
        updateStatsPreview();

        // Typing Effect removed for static list content
        // if (!window.syntaraInitialized) { ... }
    };

    function setupInteractions(container) {
        // "Start Learning" Button - Scroll to AI Slot & Focus Input
        const startBtn = container.querySelector('.syntara-hero .btn-primary');
        const aiSlot = container.querySelector('.ai-slot-container');
        const inputBar = container.querySelector('.ai-input-bar');
        const sendBtn = container.querySelector('.ai-action-btn.send-btn'); // Target specific send button

        // Convert static div to input if it's not already
        let inputField = inputBar;
        if (inputBar && inputBar.tagName !== 'INPUT') {
            inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.className = 'ai-input-bar';

            // Localization for placeholder
            const placeholderKey = 'syntara.input.example';
            inputField.setAttribute('data-i18n', placeholderKey);
            inputField.setAttribute('data-i18n-target', 'placeholder');

            if (window.i18n && window.i18n.t) {
                inputField.placeholder = window.i18n.t(placeholderKey);
            } else {
                inputField.placeholder = "Eg: Explain how the nervous system interacts with the muscular system";
            }

            // Copy styles or let CSS handle it via class
            inputBar.parentNode.replaceChild(inputField, inputBar);
        }

        if (startBtn && aiSlot) {
            startBtn.addEventListener('click', () => {
                aiSlot.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    if (inputField) inputField.focus();
                    aiSlot.style.boxShadow = '0 0 30px rgba(0, 122, 255, 0.3)';
                    setTimeout(() => aiSlot.style.boxShadow = '', 1000);
                }, 500);
            });
        }

        // Chat Interaction
        if (inputField && sendBtn) {
            const handleParams = { container, inputField };

            sendBtn.addEventListener('click', () => handleUserMessage(handleParams));

            inputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleUserMessage(handleParams);
            });
        }

        // "See How It Works" - Scroll to Modes
        const worksBtn = container.querySelector('.syntara-hero .btn-secondary');
        const modesGrid = container.querySelector('.modes-grid');
        if (worksBtn && modesGrid) {
            worksBtn.addEventListener('click', () => {
                modesGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }


    }

    async function handleUserMessage({ container, inputField }) {
        const text = inputField.value.trim();
        if (!text) return;

        // Clear input
        inputField.value = '';

        // 1. Display User Message
        appendMessage(container, text, 'user');

        // 2. Show Loading State
        const thinkingText = window.i18n && window.i18n.t ? window.i18n.t('syntara.status.thinking') : 'Syntara is thinking...';
        const loadingId = appendMessage(container, thinkingText, 'ai', true);

        // 3. Call AI API
        try {
            const response = await callAI(text);

            // Remove loading, add actual response
            removeMessage(container, loadingId);
            animateTextResponse(container, response);

        } catch (error) {
            console.error("Content generation failed:", error);
            removeMessage(container, loadingId);

            let errorMsgKey = 'syntara.error.connection';
            let errorMsg = window.i18n && window.i18n.t ? window.i18n.t(errorMsgKey) : "I apologize, but I'm having trouble connecting to my neural network right now.";

            if (error.message.includes("Failed to fetch")) {
                errorMsgKey = 'syntara.error.network';
                errorMsg = window.i18n && window.i18n.t ? window.i18n.t(errorMsgKey) : "Network/CORS Error: Browser blocked the request. A backend proxy is required.";
            } else if (error.message.includes("402")) {
                errorMsgKey = 'syntara.error.credits';
                errorMsg = window.i18n && window.i18n.t ? window.i18n.t(errorMsgKey) : "My neural network access is temporarily suspended due to insufficient credits. Please check your DeepSeek API balance.";
            } else if (error.message.includes("401")) {
                errorMsgKey = 'syntara.error.auth';
                errorMsg = window.i18n && window.i18n.t ? window.i18n.t(errorMsgKey) : "Authentication failed. Please check your API Key in js/secrets.js.";
            } else {
                // For other errors, append the specific message to the generic connection error
                errorMsg += ` (${error.message})`;
            }
            appendMessage(container, errorMsg, 'ai-error');
        }
    }

    // Append message to the chat area
    // Note: The current UI design has a single "ai-placeholder-message". 
    // We might want to convert `.ai-body` to a scrollable chat list or just replace the text for the "Single Turn" interaction model.
    // Based on the "Personal Intelligent Biology Assistant" vibe, a chat stream is better, but the UI has a centered placeholder.
    // Let's adapt: If it's the first message, clear the placeholder. 
    function appendMessage(container, text, sender, isLoading = false) {
        const aiBody = container.querySelector('.ai-body');
        const placeholder = aiBody.querySelector('.ai-placeholder-message');

        // If placeholder exists, remove it or hide it
        if (placeholder) {
            placeholder.remove();
            // Enable scrolling for chat
            aiBody.style.display = 'block';
            aiBody.style.overflowY = 'auto';
            aiBody.style.maxHeight = '400px'; // Limit height
            aiBody.style.alignItems = 'flex-start'; // Align top
            aiBody.style.justifyContent = 'flex-start';
            aiBody.style.padding = '20px';
        }

        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender} ${isLoading ? 'loading-pulse' : ''}`;
        msgDiv.id = isLoading ? 'msg-loading-' + Date.now() : '';

        // Styles for messages (Inline for now, should move to CSS later)
        if (sender === 'user') {
            msgDiv.style.background = 'rgba(255, 255, 255, 0.1)';
            msgDiv.style.padding = '12px 16px';
            msgDiv.style.borderRadius = '16px 16px 2px 16px';
            msgDiv.style.marginBottom = '12px';
            msgDiv.style.marginLeft = 'auto';
            msgDiv.style.maxWidth = '80%';
            msgDiv.style.width = 'fit-content';
            msgDiv.style.color = 'var(--text-primary)';
        } else {
            // AI
            msgDiv.style.background = 'rgba(0, 122, 255, 0.1)'; /* Blue tint */
            if (sender === 'ai-error') msgDiv.style.background = 'rgba(255, 59, 48, 0.1)';

            msgDiv.style.padding = '12px 16px';
            msgDiv.style.borderRadius = '16px 16px 16px 2px';
            msgDiv.style.marginBottom = '12px';
            msgDiv.style.marginRight = 'auto';
            msgDiv.style.maxWidth = '85%';
            msgDiv.style.color = 'var(--text-primary)';
            msgDiv.style.border = '1px solid rgba(255, 255, 255, 0.05)';
        }

        msgDiv.textContent = text;
        aiBody.appendChild(msgDiv);

        // Auto scroll
        aiBody.scrollTop = aiBody.scrollHeight;

        return msgDiv.id;
    }

    function removeMessage(container, id) {
        const el = container.querySelector('#' + id);
        if (el) el.remove();
    }

    function animateTextResponse(container, text) {
        const aiBody = container.querySelector('.ai-body');
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ai`;

        msgDiv.style.background = 'rgba(0, 122, 255, 0.1)';
        msgDiv.style.padding = '12px 16px';
        msgDiv.style.borderRadius = '16px 16px 16px 2px';
        msgDiv.style.marginBottom = '12px';
        msgDiv.style.marginRight = 'auto';
        msgDiv.style.maxWidth = '85%';
        msgDiv.style.color = 'var(--text-primary)';
        msgDiv.style.border = '1px solid rgba(255, 255, 255, 0.05)';

        // Markdown support (Basic: **bold**, *italic*)
        // Simple formatter
        const formatted = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');

        msgDiv.innerHTML = ''; // Start empty
        aiBody.appendChild(msgDiv);

        // Typewriter effect
        let i = 0;
        // Strip HTML for typing (complex, so let's just dump innerHTML for efficiency or simple text typing)
        // For a smoother look with HTML, we just fade it in.
        msgDiv.innerHTML = formatted;
        msgDiv.style.animation = 'fadeIn 0.5s ease';

        aiBody.scrollTop = aiBody.scrollHeight;
    }

    async function callAI(userPrompt) {
        // Check: If we have an endpoint but no key, and the endpoint looks like a local proxy/api, 
        // we assume the proxy handles auth.
        const apiKey = window.SyntaraConfig.API_KEY;
        const endpoint = window.SyntaraConfig.API_ENDPOINT;

        if (!apiKey && (!endpoint || endpoint.startsWith("http"))) {
            // Only throw if we strictly need a client-side key (no relative proxy)
            // But if endpoint is "/api/chat", we proceed.
            if (!endpoint || !endpoint.startsWith("/")) {
                throw new Error("API Key missing and no local proxy configured.");
            }
        }

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Only add Authorization if we have a key (client-side)
                ...(apiKey ? { 'Authorization': `Bearer ${apiKey}` } : {})
            },
            body: JSON.stringify({
                model: window.SyntaraConfig.MODEL || "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: "You are Syntara, an advanced AI tutor for Human Anatomy. You are helpful, precise, and encouraging. Keep answers concise (under 150 words) unless asked for details. Use markdown for emphasis."
                    },
                    { role: "user", content: userPrompt }
                ],
                stream: false
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`API Error: ${response.status} ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return data.choices && data.choices[0] ? data.choices[0].message.content : "I didn't get a response.";
    }

    function typeWelcomeMessage(container) {
        const messageContainer = container.querySelector('.ai-placeholder-message');
        if (!messageContainer) return;

        const text = messageContainer.textContent.trim();
        messageContainer.textContent = '';
        messageContainer.style.opacity = '1';

        let i = 0;
        const speed = 30; // ms

        function type() {
            if (i < text.length) {
                messageContainer.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        // Delay slightly for effect
        setTimeout(type, 500);
    }

    function updateStatsPreview() {
        if (!window.DataCollector) return;
        const logs = window.DataCollector.getLogs();
        
        const legacySystems = ['respiratory', 'digestive', 'cardiovascular', 'reproductive', 'nervous', 'muscular', 'integumentary', 'skeletal', 'immune', 'urinary', 'endocrine'];
        const validLogs = logs.filter(l => !legacySystems.includes(l.system_id) && l.system_id !== 'general' && l.system_id);
        const answerLogs = validLogs.filter(l => l.event_type === 'question_answered');
        
        const weakEl = document.getElementById('syntara-stat-weak');
        const recEl = document.getElementById('syntara-stat-rec');
        const accEl = document.getElementById('syntara-stat-acc');
        const timeEl = document.getElementById('syntara-stat-time');
        
        if (answerLogs.length === 0) {
            if(weakEl) weakEl.textContent = '0';
            if(recEl) {
                recEl.textContent = '-';
                recEl.removeAttribute('data-i18n'); // prevent i18n from overriding
            }
            if(accEl) accEl.textContent = '0%';
            if(timeEl) timeEl.textContent = '0m';
            return;
        }

        const correct = answerLogs.filter(l => l.is_correct).length;
        const totalTimeMs = answerLogs.reduce((acc, l) => acc + (l.response_time_ms || 0), 0);
        const overallAccuracy = Math.round((correct / answerLogs.length) * 100);
        
        // System Breakdown by Group
        const systemBreakdown = {};
        answerLogs.forEach(log => {
            let groupId = log.system_id;
            if (window.anatomyData) {
                const element = window.anatomyData.find(e => String(e.id) === String(log.system_id));
                if (element && element.groupKey) {
                    groupId = element.groupKey;
                } else if (element && element.group) {
                    groupId = element.group.toLowerCase().replace(/ /g, '_');
                }
            }

            if (!systemBreakdown[groupId]) {
                systemBreakdown[groupId] = { total: 0, correct: 0 };
            }
            systemBreakdown[groupId].total++;
            if (log.is_correct) systemBreakdown[groupId].correct++;
        });

        let weakCount = 0;
        let weakestSysId = null;
        let weakestAcc = 100;

        Object.keys(systemBreakdown).forEach(sysId => {
            const stats = systemBreakdown[sysId];
            const acc = (stats.correct / stats.total) * 100;
            if (stats.total >= 2) {
                if (acc < 70) weakCount++;
                if (acc <= weakestAcc) {
                    weakestAcc = acc;
                    weakestSysId = sysId;
                }
            } else if (weakestSysId === null) {
                if (acc < 70) weakCount++;
                weakestSysId = sysId;
                weakestAcc = acc;
            }
        });

        let recName = '-';
        if (weakestSysId) {
            if (window.i18n && window.i18n.t(`group.${weakestSysId}`) !== `group.${weakestSysId}`) {
                recName = window.i18n.t(`group.${weakestSysId}`);
            } else if (window.anatomyData) {
                const element = window.anatomyData.find(e => e.id === weakestSysId || e.groupKey === weakestSysId);
                if (element && element.group) recName = element.group;
                else recName = weakestSysId;
            } else {
                recName = weakestSysId;
            }
            
        } else {
             recName = 'Explore';
        }

        if(weakEl) weakEl.textContent = weakCount;
        if(recEl) {
            recEl.textContent = recName;
            recEl.removeAttribute('data-i18n'); // dynamic content
        }
        if(accEl) accEl.textContent = `${overallAccuracy}%`;
        if(timeEl) {
            const totalMins = Math.round(totalTimeMs / 1000 / 60);
            timeEl.textContent = `${totalMins}m`;
        }
    }

    // Re-init on navigation
    window.addEventListener('navigate', (e) => {
        if (e.detail.view === 'syntara') {
            window.initSyntaraAI();
        }
    });

})();
