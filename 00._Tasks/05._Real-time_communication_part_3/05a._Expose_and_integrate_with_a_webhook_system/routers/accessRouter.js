import { Router } from "express";
import { deleteOneWebhook } from "../database/actions/deleteWebhook.js";
import { createOneWebhook } from "../database/actions/createWebhooks.js";
import { readWebhooks } from "../database/actions/readWebhooks.js";
const router = Router();

const EVENTTYPE = "access";

router.get('/monitoring/access', async (req, res) => {
    const { status, message } = await readWebhooks(EVENTTYPE);
    res.status(status).send({ message: message });
});


router.post('/monitoring/access', async (req, res) => {
    const { message, status } = await createOneWebhook(EVENTTYPE, req.body.url, req.body.password);
    res.status(status).send(message);
});

router.delete('/monitoring/access', async (req, res) => {
    const { message, status } = await deleteOneWebhook(EVENTTYPE, req.body.url);
    res.status(status).send(message);
});

export default router;