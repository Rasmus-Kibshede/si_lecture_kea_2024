import { Router } from 'express';
import { readXMLFile } from '../fileReaders/read_xml_file.js';

const csvRouter = Router();

csvRouter.get('/xml/person', async (req, res) => {
  res.send({ data: await readXMLFile('person') });
});

export default csvRouter;
