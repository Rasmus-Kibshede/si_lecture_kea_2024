import express from "express";
import multer from "multer";

const app = express();
app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "./uploads/" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const uniqFileName = `${uniquePrefix}__${file.originalname}`;
    cb(null, uniqFileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allawedTypes = ["image/jpeg", "image/jpg"];

  if (!allawedTypes.includes(file.mimetype)) {
    cb(new Error("Wrong file type"), false);
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 0.1 * 1024 * 1024,
  },
  fileFilter: fileFilter,
});

app.post("/form", (req, res) => {
  console.log(req.body);
  delete req.body.password;
  res.send(req.body);
});

app.post("/fileform", upload.single("file"), (req, res) => {
  console.log(req.body);

  res.send({});
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
