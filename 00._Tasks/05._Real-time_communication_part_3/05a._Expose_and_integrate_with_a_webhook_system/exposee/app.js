import express from 'express';

const app = express();
app.use(express.json());

import alertRouter from './routers/alertRouter.js';
app.use(alertRouter);

import accessRouter from './routers/accessRouter.js';
app.use(accessRouter);

import { readWebhooks } from './database/actions/readWebhooks.js';

app.get('/monitoring/ping', async (req, res) => {
    try {
        const { status, data } = await readWebhooks();

        data.forEach((webhook) => {
            fetch(webhook.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: webhook }),
            });
        });

        res.status(status).send({ data: 'Webhooks has been send' });
    } catch (error) {
        res.status(500).send({ data: error.message });
    }
});

app.get('*', (req, res) => {
    res.status(404).send({ data: 'No endpoint in this path!' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`The server: \x1b[36mhttp://localhost:${PORT}`)
});