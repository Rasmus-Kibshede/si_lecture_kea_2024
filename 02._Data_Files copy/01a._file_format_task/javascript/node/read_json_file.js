import fs from 'fs';
import { Person } from './models/person.js';

const fileReaderJson = (path) => {
  const resposne = fs.readFileSync(path, 'utf8');

  const result = JSON.parse(resposne);

  const fullname = `${result.firtname} ${result.lastname}`;

  return new Person(fullname, result.age);
};

console.log(fileReaderJson('../../../me.json'));
