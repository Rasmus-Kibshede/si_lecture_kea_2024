import fs from 'fs';
import { Person } from './models/person.js';

const fileReaderText = (path) => {
  const response = fs.readFileSync(path, 'utf8');

  const lines = response.split('\n');

  return lines.map((line) => {
    const dataArr = line.split('.');

    return new Person(dataArr[0], Number(dataArr[1].split(' ')[1]));
  });
};

console.log(fileReaderText('../../../me.txt'));
