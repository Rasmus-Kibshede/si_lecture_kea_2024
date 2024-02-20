import { Router } from 'express';
import { readXMLFile } from '../fileReaders/read_xml_file.js';
import { fetch_data } from '../util.js';

const xmlRouter = Router();

xmlRouter.get('/format/xml', async (req, res) => {
  res.send({ data: readXMLFile('person.xml') });
});

xmlRouter.get('/xml', async (req, res) => {
  res.send({ data: JSON.parse(await fetch_data('xml')) });
});

export default xmlRouter;
