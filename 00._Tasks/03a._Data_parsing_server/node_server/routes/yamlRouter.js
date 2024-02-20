import { Router } from 'express';
import { fileReaderYaml } from '../fileReaders/read_yaml_file.js';
import { fetch_data } from '../util.js';

const yamlRouter = Router();

yamlRouter.get('/format/yaml', async (req, res) => {
  res.send({ data: await fileReaderYaml('person.yaml') });
});

yamlRouter.get('/yaml', async (req, res) => {
  res.send({ data: await fetch_data('yaml') });
});

export default yamlRouter;
