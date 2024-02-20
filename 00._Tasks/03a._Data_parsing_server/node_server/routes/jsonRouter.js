import { Router } from 'express';
import { fileReaderJson } from '../fileReaders/read_json_file.js';
import { fetch_data } from '../util.js';

const jsonRouter = Router();

jsonRouter.get('/format/json', async (req, res) => {
  res.send({ data: await fileReaderJson('person.json') });
});

jsonRouter.get('/json', async (req, res) => {
  res.send({ data: await fetch_data('json') });
});

export default jsonRouter;
