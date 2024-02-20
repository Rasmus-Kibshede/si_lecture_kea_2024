import { Router } from 'express';
import { fileReaderText } from '../fileReaders/read_txt_file.js';
import { fetch_data } from '../util.js';

const txtRouter = Router();

txtRouter.get('/format/txt', async (req, res) => {
  res.send({ data: fileReaderText('person.txt') });
});

txtRouter.get('/txt', async (req, res) => {
  try {
    res.send({ data: JSON.parse(await fetch_data('txt'))});
  } catch (e) {
    res.send({ data: 'Error fetching data' });
  }
});

export default txtRouter;
