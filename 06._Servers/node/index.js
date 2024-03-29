import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

import csvRouter from './routes/csvRouter.js';
app.use(csvRouter);

import xmlRouter from './routes/xmlRouter.js';
app.use(xmlRouter);

import yamlRouter from './routes/yamlRouter.js';
app.use(yamlRouter);

import jsonRouter from './routes/jsonRouter.js';
app.use(jsonRouter);

import txtRouter from './routes/txtRouter.js';
app.use(txtRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`The server: \x1b[36mhttp://localhost:${PORT}`)
);
