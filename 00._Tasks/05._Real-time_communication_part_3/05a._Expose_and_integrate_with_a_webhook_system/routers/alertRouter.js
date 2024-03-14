import { Router } from "express";
const router = Router();

import db from '../database/connection_sqlite.js';

const EVENTTYPE = "alert";

router.post('/monitoring/alert', (req, res) => {
    try {
        db.run(`INSERT INTO webhooks (event_type, url, password) VALUES (?, ?, ?)`, [EVENTTYPE, req.body.url, req.body.password]);
    } catch (error) {
        res.send({ message: 'Error: ' + error });
    }

    res.status(200).send({ message: 'Monitoring alert subscribed!' });
});

router.delete('/monitoring/alert', async (req, res) => {
    try {
        const reuslt = await db.run(`DELETE FROM webhooks WHERE url = ? AND event_type = ?`, [req.body.url, EVENTTYPE]);

        if (reuslt.changes === 0) {
            res.status(400).send({ message: 'Error: No such url!' });
        } else {
            res.status(200).send('Monitoring alert unsubscribed!');
        };
    } catch (error) {
        res.status(400).send({ message: 'Error: ' + error });
    };
});

export default router;