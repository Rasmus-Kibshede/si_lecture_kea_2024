import { Router } from 'express';
import { formatCSVFileToJson } from '../fileReaders/read_csv_file.js';

const csvRouter = Router();

csvRouter.get('/format/csv', async (req, res) => {
  res.send({ data: await formatCSVFileToJson('person.csv') });
});

csvRouter.get('/csv', async (req, res) => {
  const response = await fetch('http://127.0.0.1:8000/format/csv');
  const result = await response.json();
  res.send({ data: result });
});

export default csvRouter;
