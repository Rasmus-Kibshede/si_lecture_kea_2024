import db from '../connection_sqlite.js';

export const readWebhooks = async (eventType = null) => {
    try {
        let data = null;
        if (eventType !== null) {
            data = await db.all(`SELECT * FROM webhooks WHERE event_type = ?`, eventType);
        } else {
            data = await db.all(`SELECT * FROM webhooks`);
        }
        return { message: data, status: 200 };
    } catch (error) {
        return { message: 'Error: ' + error, status: 400 };
    }
};