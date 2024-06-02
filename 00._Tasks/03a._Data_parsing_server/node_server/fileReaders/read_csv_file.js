import csv from "csvtojson";
import { Person } from "../models/person.js";
import { getFileURLPath } from "../util.js";

export const formatCSVFileToJson = async (fileName) => {
  const jsonObj = await csv().fromFile(getFileURLPath(fileName));

  const people = jsonObj.map((person) => {
    return new Person(
      `${person.firstname} ${person.lastname}`,
      Number(person.age),
      Number(person.heightInCm),
      person.hobbies.split(",").map(hobby => hobby.trim()),  // Splitting and trimming hobbies into an array
      {
        street: person.address_street,
        city: person.address_city,
        zipcode: person.address_zipcode
      }
    );
  });

  return people;
};
