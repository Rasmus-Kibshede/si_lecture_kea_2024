import express from "express";

const app = express();

app.use(express.static("public"));

let clients = [];

app.get("/events/subscribe", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  clients.push(res);

  req.on("close", () => {
    clients = clients.filter((client) => client !== res);
  });
});

app.get("/events/publish", (req, res) => {
  const newData = "This is a new message";

  clients.forEach((client) => {
    client.send(newData);
  });

  res.status(204).end();
});

const PORT = 8080;
app.listen(PORT, () => console.log("The server runs on:", PORT));
