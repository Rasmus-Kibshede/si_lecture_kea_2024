import { Router } from "express";
const router = Router();

import db from '../database/connection_sqlite.js';

router.post('/monitoring/access', (req, res) => {
    try {
        db.run(`INSERT INTO webhooks (url) VALUES (?)`, req.body.url);
    } catch (error) {
        res.send({ message: 'Error: ' + error });
    }

    res.status(200).send({ message: 'Monitoring access subscribed!' });
});

router.delete('/monitoring/access', async (req, res) => {
    try {
        const reuslt = await db.run(`DELETE FROM webhooks WHERE url = ?`, req.body.url);

        if (reuslt.changes === 0) {
            res.status(400).send({ message: 'Error: No such url!' });
        } else {
            res.status(200).send('Monitoring access unsubscribed!');
        }

    }
    catch (error) {
        res.status(400).send({ message: 'Error: ' + error });
    }
});

export default router;