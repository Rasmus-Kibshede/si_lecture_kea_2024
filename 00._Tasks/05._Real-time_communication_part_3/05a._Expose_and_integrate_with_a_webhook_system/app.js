import express from 'express';
import db from './database/connection_sqlite.js';

const app = express();
app.use(express.json());

import alertRouter from './Routers/alertRouter.js';
app.use(alertRouter);

import accessRouter from './Routers/accessRouter.js';
app.use(accessRouter);

app.get('/monitoring/ping', async (req, res) => {
    const data = await db.all(`SELECT * FROM webhooks`);
    res.status(200).send({ data: data });
});

app.get('*', (req, res) => {
    res.status(404).send({ message: 'No endpoint in this path!' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`The server: \x1b[36mhttp://localhost:${PORT}`)
});