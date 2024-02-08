import { fileURLToPath } from 'url';
import path from 'path';

export const getFileURLPath = (fileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, `./files/${fileName}.csv`);
  return filePath;
};
