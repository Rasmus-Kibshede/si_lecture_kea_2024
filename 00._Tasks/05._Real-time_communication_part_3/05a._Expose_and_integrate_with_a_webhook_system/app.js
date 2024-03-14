import express from 'express';

const app = express();
app.use(express.json());

import alertRouter from './routers/alertRouter.js';
app.use(alertRouter);

import accessRouter from './routers/accessRouter.js';
app.use(accessRouter);

import { readWebhooks } from './database/actions/readWebhooks.js';
app.get('/monitoring/ping', async (req, res) => {
    const { status, message } = await readWebhooks();
    res.status(status).send({ message: message });
});

app.get('*', (req, res) => {
    res.status(404).send({ message: 'No endpoint in this path!' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`The server: \x1b[36mhttp://localhost:${PORT}`)
});