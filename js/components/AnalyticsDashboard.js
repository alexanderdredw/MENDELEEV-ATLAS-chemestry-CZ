/* js/components/AnalyticsDashboard.js */
(function () {
    window.initAnalytics = function () {
        const container = document.getElementById('view-analytics');
        if (!container) return;
        renderDashboard(container);
    };

    // Re-render on navigation to analytics
    window.addEventListener('navigate', (e) => {
        if (e.detail.view === 'analytics') {
            window.initAnalytics();
        }
    });

    // Re-render on language change
    window.addEventListener('languageChanged', () => {
        const container = document.getElementById('view-analytics');
        if (container && container.style.display !== 'none') {
            renderDashboard(container);
        }
    });

    function renderDashboard(container) {
        const logs = window.DataCollector.getLogs();
        const t = window.i18n ? window.i18n.t : (k) => k;

        // Calculate Stats
        const stats = calculateStats(logs);

        container.innerHTML = `
            <div class="analytics-container fade-in-up">
                <header class="analytics-header">
                    <h2 class="hero-title">${t('analytics.title')}</h2>
                    <p class="hero-subtitle">${t('analytics.subtitle')}</p>
                </header>

                <!-- KPI Cards -->
                <div class="kpi-grid">
                    <div class="kpi-card">
                        <div class="kpi-value">${stats.totalQuestions}</div>
                        <div class="kpi-label">${t('analytics.kpi.questions')}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">${stats.accuracy}%</div>
                        <div class="kpi-label">${t('analytics.kpi.accuracy')}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">${(stats.avgTime / 1000).toFixed(1)}s</div>
                        <div class="kpi-label">${t('analytics.kpi.time')}</div>
                    </div>
                </div>

                <!-- System Performance -->
                <div class="analytics-section">
                    <h3 class="section-title">${t('analytics.section.performance')}</h3>
                    <div class="system-performance-list">
                        ${renderSystemPerformance(stats.systemBreakdown)}
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="analytics-section">
                    <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                         <h3 class="section-title" style="margin: 0;">${t('analytics.section.activity')}</h3>
                         <button class="btn btn-secondary btn-sm" id="clear-data-btn">${t('analytics.btn.clear')}</button>
                    </header>
                   
                    <div class="activity-log-wrapper">
                        <table class="activity-table">
                            <thead>
                                <tr>
                                    <th>${t('analytics.table.time')}</th>
                                    <th>${t('analytics.table.system')}</th>
                                    <th>${t('analytics.table.result')}</th>
                                    <th>${t('analytics.table.duration')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${renderActivityLog(logs)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <style>
                .analytics-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 2rem;
                    width: 100%;
                }
                .kpi-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }
                .kpi-card {
                    background: var(--surface);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 2rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .kpi-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 4px;
                    background: var(--primary-gradient);
                }
                .kpi-value {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    font-family: 'Space Grotesk', sans-serif;
                }
                .kpi-label {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .system-performance-list {
                    display: grid;
                    gap: 1.5rem;
                }
                .system-stat-item {
                    background: var(--surface);
                    padding: 1.5rem;
                    border-radius: 12px;
                    border: 1px solid var(--border);
                }
                .stat-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }
                .progress-bar-bg {
                    background: rgba(255,255,255,0.1);
                    height: 8px;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .progress-bar-fill {
                    height: 100%;
                    border-radius: 4px;
                    transition: width 1s ease;
                }

                .activity-log-wrapper {
                    overflow-x: auto;
                    border: 1px solid var(--border);
                    border-radius: 12px;
                }
                .activity-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                }
                .activity-table th, .activity-table td {
                    padding: 1rem;
                    border-bottom: 1px solid var(--border);
                }
                .activity-table th {
                    background: rgba(0,0,0,0.2);
                    color: var(--text-secondary);
                    font-weight: 600;
                }
                .tag-correct { color: var(--success); font-weight: bold; }
                .tag-incorrect { color: var(--accent-red); font-weight: bold; }

                /* Mobile Optimizations */
                @media (max-width: 480px) {
                    .analytics-container {
                        padding: 1rem;
                        width: 100%;
                        overflow-x: hidden; /* Prevent container overflow */
                        box-sizing: border-box;
                    }

                    .analytics-header .hero-title {
                        font-size: 2rem;
                        word-wrap: break-word;
                        overflow-wrap: break-word;
                        line-height: 1.2;
                    }

                    .kpi-grid {
                        grid-template-columns: 1fr; /* Stack KPIs */
                        gap: 1rem;
                        margin-bottom: 2rem;
                    }

                    .kpi-card {
                        padding: 1.5rem; /* Reduce padding */
                    }

                    .kpi-value {
                        font-size: 2rem; /* Smaller number font */
                    }

                    .analytics-section .section-title {
                        font-size: 1.5rem;
                        text-align: center;
                    }

                    .activity-table th, .activity-table td {
                        padding: 0.75rem 0.5rem; /* Tighter table spacing */
                        font-size: 0.85rem;
                        white-space: nowrap; /* Keep table cells on one line if possible, scroll wrapper handles it */
                    }

                    .activity-log-wrapper {
                        margin: 0 -1rem; /* Negative margin to let table scroll edge-to-edge */
                        width: calc(100% + 2rem);
                        border-radius: 0;
                        border-left: none;
                        border-right: none;
                    }

                    /* Ensure table header doesn't overflow visually in weird ways */
                    .activity-table {
                        min-width: 100%; 
                    }
                }
            </style>
        `;

        // Bind Clear Data
        const clearBtn = container.querySelector('#clear-data-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                const confirmMsg = t('analytics.confirm.clear');
                if (confirm(confirmMsg)) {
                    window.DataCollector.clearLogs();
                    renderDashboard(container); // Re-render
                }
            });
        }
    }

    function calculateStats(logs) {
        const answerLogs = logs.filter(l => l.event_type === 'question_answered');
        const total = answerLogs.length;
        if (total === 0) return { totalQuestions: 0, accuracy: 0, avgTime: 0, systemBreakdown: {} };

        const correct = answerLogs.filter(l => l.is_correct).length;
        const totalTime = answerLogs.reduce((acc, l) => acc + (l.response_time_ms || 0), 0);

        // System Breakdown
        const systemBreakdown = {};
        answerLogs.forEach(log => {
            if (!systemBreakdown[log.system_id]) {
                systemBreakdown[log.system_id] = { total: 0, correct: 0, time: 0 };
            }
            systemBreakdown[log.system_id].total++;
            if (log.is_correct) systemBreakdown[log.system_id].correct++;
            systemBreakdown[log.system_id].time += (log.response_time_ms || 0);
        });

        return {
            totalQuestions: total,
            accuracy: Math.round((correct / total) * 100),
            avgTime: Math.round(totalTime / total),
            systemBreakdown
        };
    }

    function renderSystemPerformance(breakdown) {
        const t = window.i18n ? window.i18n.t : (k) => k;
        const systemIds = Object.keys(breakdown);
        if (systemIds.length === 0) return `<p style="color: var(--text-secondary); text-align: center;">${t('analytics.empty.system')}</p>`;

        return systemIds.map(sysId => {
            const data = breakdown[sysId];
            const system = window.getSystemById(sysId) || { title: sysId, color: '#ccc' };
            const accuracy = Math.round((data.correct / data.total) * 100);

            // Color coding for progress bar
            let progressColor = 'var(--accent-red)';
            if (accuracy >= 80) progressColor = 'var(--success)';
            else if (accuracy >= 50) progressColor = 'var(--accent-blue)';

            return `
                <div class="system-stat-item">
                    <div class="stat-header">
                        <span style="font-weight: 600; color: ${system.color};">${system.title}</span>
                        <span>${accuracy}% (${data.correct}/${data.total})</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${accuracy}%; background: ${progressColor};"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderActivityLog(logs) {
        const t = window.i18n ? window.i18n.t : (k) => k;
        // Show last 10 'question_answered' events
        const recentLogs = logs
            .filter(l => l.event_type === 'question_answered')
            .reverse()
            .slice(0, 10);

        if (recentLogs.length === 0) return `<tr><td colspan="4" style="text-align: center; color: var(--text-secondary);">${t('analytics.empty.log')}</td></tr>`;

        return recentLogs.map(log => {
            const system = window.getSystemById(log.system_id) || { title: log.system_id };
            const date = new Date(log.timestamp).toLocaleTimeString();
            const resultText = log.is_correct ? t('analytics.result.correct') : t('analytics.result.incorrect');
            return `
                <tr>
                    <td>${date}</td>
                    <td>${system.title}</td>
                    <td class="${log.is_correct ? 'tag-correct' : 'tag-incorrect'}">${resultText}</td>
                    <td>${(log.response_time_ms / 1000).toFixed(1)}s</td>
                </tr>
            `;
        }).join('');
    }
})();
