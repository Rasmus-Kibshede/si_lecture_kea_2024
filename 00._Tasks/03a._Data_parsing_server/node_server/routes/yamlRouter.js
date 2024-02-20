import { Router } from 'express';
import { fileReaderYaml } from '../fileReaders/read_yaml_file.js';

const yamlRouter = Router();

yamlRouter.get('/yaml', async (req, res) => {
  res.send({ data: await fileReaderYaml('person.yaml') });
});

yamlRouter.get('/fetch/yaml', async (req, res) => {
  const response = await fetch('http://127.0.0.1:8000/fetch/yaml');
  const result = await response.json();
  res.send({ data: result });
});

export default yamlRouter;
