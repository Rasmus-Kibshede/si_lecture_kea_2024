import { Router } from "express";
import { deleteOneWebhook } from "../database/actions/deleteWebhook.js";
import { createOneWebhook } from "../database/actions/createWebhooks.js";
import { readWebhooks } from "../database/actions/readWebhooks.js";
const router = Router();

const EVENTTYPE = "alert";

router.get('/monitoring/alert', async (req, res) => {
    const { status, message } = await readWebhooks(EVENTTYPE);
    res.status(status).send({ message: message });
});

router.post('/monitoring/alert', async (req, res) => {
    const { message, status } = await createOneWebhook(EVENTTYPE, req.body.url, req.body.password);
    console.log(message, status);
    res.status(status).send(message);
});

router.delete('/monitoring/alert', async (req, res) => {
    const { message, status } = await deleteOneWebhook(EVENTTYPE, req.body.url);
    res.status(status).send(message);
});

export default router;