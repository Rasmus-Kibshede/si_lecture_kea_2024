import express from "express";

const app = express();

app.get("/requestFastAPI", async (req, res) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/fastapiData");
    const result = await response.json();
    res.send(result);
  } catch (error) {
    res.send({ data: "Data fetch error" });
  }
});

app.get("/expressData", (req, res) => {
  res.send({ message: "isRunning" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`The server: \x1b[36mhttp://127.0.0.1:${PORT}`)
);
