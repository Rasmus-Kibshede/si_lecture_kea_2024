import db from '../connection_sqlite.js';

export const deleteOneWebhook = async (eventType, url) => {
    try {
        const reuslt = await db.run(`DELETE FROM webhooks WHERE url = ? AND event_type = ?`, [url, eventType]);

        if (reuslt.changes === 0) {
            return { data: 'Error: No such data!', status: 400 };
        } else {
            return { data: `Monitoring ${eventType} unsubscribed!`, status: 200 };
        };
    } catch (error) {
        return { data: 'Error: ' + error, status: 400 };
    };
}