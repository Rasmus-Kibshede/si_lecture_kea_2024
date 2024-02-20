import { Router } from 'express';
import { readXMLFile } from '../fileReaders/read_xml_file.js';

const xmlRouter = Router();

xmlRouter.get('/xml', async (req, res) => {
  res.send({ data: readXMLFile('person.xml') });
});

xmlRouter.get('/fetch/xml', async (req, res) => {
  const response = await fetch('http://127.0.0.1:8000/fetch/xml');
  const result = await response.json();
  res.send({ data: JSON.parse(result) });
});

export default xmlRouter;
