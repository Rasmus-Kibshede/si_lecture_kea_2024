import db from '../connection_sqlite.js';

export const createOneWebhook = async (eventType, url, password) => {
    try {
        const result = await db.run(`INSERT INTO webhooks (event_type, url, password) VALUES (?, ?, ?)`, [eventType, url, password]);

        if (result.changes === 0) {
            return { data: 'Error: something went wrong, try again later', status: 400 };
        } else {
            return { data: `Monitoring ${eventType} subscribed!`, status: 200 };
        }
    } catch (error) {
        return { data: 'Error: ' + error, status: 400 };
    }
}