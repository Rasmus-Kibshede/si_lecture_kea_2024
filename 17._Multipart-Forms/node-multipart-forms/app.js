import express from "express";
import multer from "multer";

const app = express();
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "./uploads/" });


app.post("/form", (req, res) => {
  console.log(req.body);
  delete req.body.password;
  res.send(req.body);
});

app.post("/fileform", upload.single('file'), (req, res) => {
  console.log(req.body);
  res.send({});
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
