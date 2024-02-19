import convert from 'xml-js';
import fs from 'fs';
import { getFileURLPath } from '../util.js';

export const readXMLFile = (fileName) => {
  console.log(getFileURLPath(fileName));
  const xml = fs.readFileSync(getFileURLPath(fileName), 'utf8');
  const result = convert.xml2js(xml, { compact: true, spaces: 4 });
  return result;
};
