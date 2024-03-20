export const validateWebhook = (req, res, next) => {
    if (req.body.url && req.body.password) {
        next();
    } else {
        res.status(400).send({ data: 'Missing url or password' });
    }
};