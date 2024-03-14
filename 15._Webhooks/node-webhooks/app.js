import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/githubwebhooksjson", (req, res) => {
  console.log(req.body);
  res.sendStatus(204);
});

app.post("/githubwebhooksform", (req, res) => {
  console.log(req.body);
  res.sendStatus(204);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
