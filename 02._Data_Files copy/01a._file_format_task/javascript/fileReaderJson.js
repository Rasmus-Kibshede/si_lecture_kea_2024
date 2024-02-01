const fs = require('fs');
const Person = require('./person');

const fileReaderJson = (path) => {
  const resposne = fs.readFileSync(path, 'utf8');

  const result = JSON.parse(resposne);

  const fullname = `${result.firtname} ${result.lastname}`;

  const person = new Person(fullname, result.age);

  console.log('fileReaderJson:', person);
};

module.exports = fileReaderJson;
