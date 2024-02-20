import { fileURLToPath } from 'url';
import path from 'path';

export const getFileURLPath = (fileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, `./files/${fileName}`);
  return filePath;
};

export const fetch_data = async (file_format) => {
  const url = 'http://127.0.0.1:8000/format/';
  const response = await fetch(`${url}${file_format}`);
  return await response.json();
};
