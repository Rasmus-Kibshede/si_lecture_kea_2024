// lib: https://www.npmjs.com/package/csvtojson#quick-start

import csv from 'csvtojson';
import { Person } from '../models/person.js';
import path from '../files/person.csv';
export const formatCSVFileToJson = async (path) => {
  console.log(`../files/${path}`);
  const jsonObj = await csv().fromFile("../files/person.csv");

  const people = jsonObj.map((person) => {
    return new Person(`${person.firstname} ${person.lastname}`, Number(person.age));
  });

  return people;
};
