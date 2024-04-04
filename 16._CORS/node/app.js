import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/timestamp", (req, res) => {
  res.send({ time: new Date() });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
