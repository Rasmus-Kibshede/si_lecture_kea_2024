import { Router } from 'express';
import { readXMLFile } from '../fileReaders/read_xml_file.js';

const xmlRouter = Router();

xmlRouter.get('/xml/person', async (req, res) => {
  res.send({ data: await readXMLFile('person.xml') });
});

export default xmlRouter;
