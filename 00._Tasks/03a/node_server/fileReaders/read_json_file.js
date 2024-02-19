import fs from 'fs';
import { getFileURLPath } from '../util.js';

export const fileReaderJson = (fileName) => {
  const resposne = fs.readFileSync(getFileURLPath(fileName), 'utf8');

  const result = JSON.parse(resposne);

  return result;
};
