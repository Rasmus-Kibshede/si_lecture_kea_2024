import { Router } from "express";
import { deleteOneWebhook } from "../database/actions/deleteWebhook.js";
import { createOneWebhook } from "../database/actions/createWebhooks.js";
import { readWebhooks } from "../database/actions/readWebhooks.js";
import { validateWebhook } from "../middleware/validation.js";
const router = Router();

const EVENTTYPE = "alert";

router.get('/monitoring/alert', async (req, res) => {
    const { status, data: data } = await readWebhooks(EVENTTYPE);
    res.status(status).send({ data: data });
});

router.post('/monitoring/alert', validateWebhook, async (req, res) => {
    const { data, status } = await createOneWebhook(EVENTTYPE, req.body.url, req.body.password);
    console.log(data, status);
    res.status(status).send(data);
});

router.delete('/monitoring/alert', validateWebhook, async (req, res) => {
    const { data, status } = await deleteOneWebhook(EVENTTYPE, req.body.url);
    res.status(status).send(data);
});

export default router;