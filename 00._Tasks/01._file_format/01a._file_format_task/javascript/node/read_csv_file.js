// lib: https://www.npmjs.com/package/csvtojson#quick-start

import csv from 'csvtojson';
import { Person } from './models/person.js';

const csvFilePath = '../../../me.csv';

const formatCSVFileToJson = async () => {
  const jsonObj = await csv().fromFile(csvFilePath);

  const people = jsonObj.map((person) => {
    return new Person(`${person.firstname} ${person.lastname}`, Number(person.age));
  });

  return people;
};

console.log(await formatCSVFileToJson());
