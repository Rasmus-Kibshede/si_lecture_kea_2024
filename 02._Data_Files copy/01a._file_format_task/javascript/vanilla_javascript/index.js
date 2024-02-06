const fileReaderText = require('./fileReaderTxt');
const fileReaderJson = require('./fileReaderJson');
const fileReaderXML = require('./fileReaderXML');

// Read from a text file
fileReaderText('../../me.txt');

// Read from a JSON file
fileReaderJson('../../me.json');

// Read from a XML file
fileReaderXML('../../me.xml');
