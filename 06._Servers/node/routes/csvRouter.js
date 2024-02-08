import { Router } from "express";
import { formatCSVFileToJson } from "../fileReaders/read_csv_file.js";

const csvRouter = Router();

csvRouter.get("/csv/person", async (req, res) => {
  res.send({ message: ''});
});

export default csvRouter;
