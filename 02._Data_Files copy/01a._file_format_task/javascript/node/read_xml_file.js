import convert from 'xml-js';
import fs from 'fs';
import { Person } from './models/person.js';

const xml = fs.readFileSync('../../../me.xml', 'utf8');

const options = {
  ignoreComment: true,
  alwaysChildren: true,
  compact: true,
};

const readXMLFile = (xml) => {
  const result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)
  const me = result.me;

  const person = new Person(
    `${me.firstname._text} ${me.lastname._text}`,
    Number(me.age._text)
  );
  return person;
};

console.log(readXMLFile(xml));
