import { Router } from 'express';
import { fileReaderJson } from '../fileReaders/read_json_file.js';

const jsonRouter = Router();

jsonRouter.get('/json', async (req, res) => {
  res.send({ data: await fileReaderJson('person.json') });
});

export default jsonRouter;
