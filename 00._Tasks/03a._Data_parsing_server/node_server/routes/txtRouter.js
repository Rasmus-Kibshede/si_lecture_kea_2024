import { Router } from 'express';
import { fileReaderText } from '../fileReaders/read_txt_file.js';

const txtRouter = Router();

txtRouter.get('/format/txt', async (req, res) => {
  res.send({ data: fileReaderText('person.txt') });
});

txtRouter.get('/txt', async (req, res) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/format/txt');
    const result = await response.json();
    res.send({ data: JSON.parse(result) });
  } catch (e) {
    res.send({ data: 'Error fetching data'});
  }
});

export default txtRouter;
