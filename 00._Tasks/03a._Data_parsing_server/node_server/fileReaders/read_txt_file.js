import fs from 'fs';
import { getFileURLPath } from '../util.js';
import { Person } from '../models/person.js';

export const fileReaderText = (fileName) => {
  const response = fs.readFileSync(getFileURLPath(fileName), 'utf8');

  const lines = response.split('\n');

  return lines.map((line) => {
    const dataArr = line.split('.');

    return new Person(dataArr[0], Number(dataArr[1].split(' ')[1]));
  });
};
