import { Router } from 'express';
import { fileReaderJson } from '../fileReaders/read_json_file.js';

const jsonRouter = Router();

jsonRouter.get('/json', async (req, res) => {
  res.send({ data: await fileReaderJson('person.json') });
});

jsonRouter.get('/fetch/json', async (req, res) => {
  const response = await fetch('http://127.0.0.1:8000/fetch/json');
  const result = await response.json();
  res.send({ data: result });
});

export default jsonRouter;
