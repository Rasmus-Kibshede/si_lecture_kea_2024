import convert from 'xml-js';
import fs from 'fs';
import { Person } from '../models/person.js';
import { getFileURLPath } from '../util.js';

const options = {
  ignoreComment: true,
  alwaysChildren: true,
  compact: true,
};

export const readXMLFile = (fileName) => {
  const xml = fs.readFileSync(getFileURLPath(fileName), 'utf8');
  const result = convert.xml2json(xml, options);
  const me = result.me;

  const person = new Person(
    `${me.firstname._text} ${me.lastname._text}`,
    Number(me.age._text)
  );
  return person;
};
