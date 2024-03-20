import express from "express";

const app = express();
app.use(express.json());

app.post('/webhookdata', async (req, res) => {
    console.log(req.body);
    res.status(200).send({ data: req.body });
});


app.post('/register', async (req, res) => {

    const webhookUrl = req.body.webhookUrl;
    const url = req.body.url;

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    });

    const result = await response.json();

    res.status(200).send({ data: result });
});


app.delete('/unregister', async (req, res) => {

    const webhookUrl = req.body.webhookUrl;
    const url = req.body.url;

    const response = await fetch(webhookUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    });

    const result = await response.json();

    res.status(200).send({ data: result });
});



app.listen(8080, () => {
    console.log(`The server: \x1b[36mhttp://localhost:8080`)
});