const fs = require('fs');
const Person = require('./person');

const fileReaderXML = async (path) => {
  const resposne = fs.readFileSync(path, 'utf8');

  const firstnameMatch = resposne.match(/<firstname>(.*?)<\/firstname>/)[1];
  const lastnameMatch = resposne.match(/<lastname>(.*?)<\/lastname>/)[1];
  const ageMatch = resposne.match(/<age>(.*?)<\/age>/)[1];

  const fullname = `${firstnameMatch} ${lastnameMatch}`;
  const person = new Person(fullname, Number(ageMatch));

  console.log('fileReaderXML:', person);
};

module.exports = fileReaderXML;
