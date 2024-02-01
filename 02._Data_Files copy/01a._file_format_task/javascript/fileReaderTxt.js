const fs = require('fs');
const Person = require('./person');

const fileReaderText = (path) => {
  const response = fs.readFileSync(path, 'utf8');

  const dataArr = response.split('.');

  const person = new Person(dataArr[0], Number(dataArr[1].split(' ')[1]));

  console.log('fileReaderText:', person);
};

module.exports = fileReaderText;
