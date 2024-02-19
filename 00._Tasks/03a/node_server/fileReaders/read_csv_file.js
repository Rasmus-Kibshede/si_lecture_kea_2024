import csv from 'csvtojson';
import { Person } from '../models/person.js';
import { getFileURLPath } from '../util.js';

export const formatCSVFileToJson = async (fileName) => {
  const jsonObj = await csv().fromFile(getFileURLPath(fileName));

  // const people = jsonObj.map((person) => {
  //   return new Person(
  //     `${person.firstname} ${person.lastname}`,
  //     Number(person.age),
  //     person.heightInCm,
  //     person.hobbies,
  //     person.address
  //   );
  // });

  return jsonObj;
};
