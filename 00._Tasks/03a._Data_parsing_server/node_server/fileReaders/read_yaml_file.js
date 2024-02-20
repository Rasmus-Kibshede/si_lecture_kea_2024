import { load } from 'js-yaml';
import fs from 'fs';
import { getFileURLPath } from '../util.js';

export const fileReaderYaml = (filenName) => {
  const data = fs.readFileSync(getFileURLPath(filenName), 'utf8');
  const yamlData = load(data);
  return yamlData;
};
