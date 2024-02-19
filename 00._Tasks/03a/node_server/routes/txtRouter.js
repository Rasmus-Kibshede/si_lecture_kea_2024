import { Router } from 'express';
import { fileReaderText } from '../fileReaders/read_txt_file.js';

const txtRouter = Router();

txtRouter.get('/txt', async (req, res) => {
  res.send({ data: fileReaderText('person.txt') });
});

export default txtRouter;
