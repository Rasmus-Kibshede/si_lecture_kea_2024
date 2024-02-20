import { Router } from 'express';
import { formatCSVFileToJson } from '../fileReaders/read_csv_file.js';
import { fetch_data } from '../util.js';

const csvRouter = Router();

csvRouter.get('/format/csv', async (req, res) => {
  res.send({ data: await formatCSVFileToJson('person.csv') });
});

csvRouter.get('/csv', async (req, res) => {
  res.send({ data: await fetch_data('csv') });
});

export default csvRouter;
