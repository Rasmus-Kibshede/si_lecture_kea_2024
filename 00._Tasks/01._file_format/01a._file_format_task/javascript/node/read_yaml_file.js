//Load the package
import { load } from 'js-yaml';
import fs from 'fs';
import { Person } from './models/person.js';

const fileReaderYaml = (path) => {
  const data = fs.readFileSync(path, 'utf8');

  const yamlData = load(data);

  return new Person(`${yamlData.firstname} ${yamlData.lastname}`, yamlData.age);
};

console.log(fileReaderYaml('../../../me.yaml'));
