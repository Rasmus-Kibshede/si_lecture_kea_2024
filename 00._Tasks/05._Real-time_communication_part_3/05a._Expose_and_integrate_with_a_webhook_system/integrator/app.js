import express from "express";

const app = express();
app.use(express.json());

app.post('/webhookdata', async (req, res) => {
    console.log(req.body);
    res.status(200).send({ data: "alert" });
});

app.listen(3000, () => {
    console.log(`The server: \x1b[36mhttp://localhost:3000`)
});