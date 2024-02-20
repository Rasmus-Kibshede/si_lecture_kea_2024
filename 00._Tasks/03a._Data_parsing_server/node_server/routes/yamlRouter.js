import { Router } from 'express';
import { fileReaderYaml } from '../fileReaders/read_yaml_file.js';

const yamlRouter = Router();

yamlRouter.get('/yaml', async (req, res) => {
  res.send({ data: await fileReaderYaml('person.yaml') });
});

export default yamlRouter;
