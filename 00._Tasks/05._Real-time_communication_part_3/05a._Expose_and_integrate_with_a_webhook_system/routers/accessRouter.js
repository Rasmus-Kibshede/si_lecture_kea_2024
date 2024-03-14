import { Router } from "express";
import { deleteOneWebhook } from "../database/actions/deleteWebhook.js";
import { createOneWebhook } from "../database/actions/createWebhooks.js";
const router = Router();

const EVENTTYPE = "access";

router.post('/monitoring/access', async (req, res) => {
    const { message, status } = await createOneWebhook(EVENTTYPE, req.body.url, req.body.password);
    res.status(status).send(message);
});

router.delete('/monitoring/access', async (req, res) => {
    const { message, status } = await deleteOneWebhook(EVENTTYPE, req.body.url);
    res.status(status).send(message);
});

export default router;