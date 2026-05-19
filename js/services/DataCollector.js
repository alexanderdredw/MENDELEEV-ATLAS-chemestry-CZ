/* js/services/DataCollector.js */
(function () {
    const STORAGE_KEY = 'atlas_interaction_logs';

    class DataCollector {
        constructor() {
            this.sessionId = this.generateSessionId();
            this.userId = this.getOrCreateUserId();
            console.log(`[DataCollector] Initialized. Session: ${this.sessionId}, User: ${this.userId}`);
        }

        generateSessionId() {
            return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }

        getOrCreateUserId() {
            let userId = localStorage.getItem('atlas_user_id');
            if (!userId) {
                userId = 'user_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('atlas_user_id', userId);
            }
            return userId;
        }

        logEvent(type, data = {}) {
            const event = {
                timestamp: new Date().toISOString(),
                user_id: this.userId,
                session_id: this.sessionId,
                event_type: type,
                ...data
            };

            this.saveEvent(event);
            console.log('[DataCollector] Event Logged:', event);
        }

        saveEvent(event) {
            try {
                const logs = this.getLogs();
                logs.push(event);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
            } catch (e) {
                console.error('[DataCollector] Failed to save event:', e);
            }
        }

        getLogs() {
            try {
                const logs = localStorage.getItem(STORAGE_KEY);
                return logs ? JSON.parse(logs) : [];
            } catch (e) {
                console.error('[DataCollector] Failed to parse logs:', e);
                return [];
            }
        }

        clearLogs() {
            localStorage.removeItem(STORAGE_KEY);
            console.log('[DataCollector] Logs cleared.');
        }

        // Analytical helper: Get logs for a specific system
        getLogsForSystem(systemId) {
            return this.getLogs().filter(log => log.system_id === systemId);
        }
    }

    // Expose logs globally
    window.DataCollector = new DataCollector();
})();
