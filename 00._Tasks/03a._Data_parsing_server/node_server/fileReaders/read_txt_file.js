import fs from 'fs';
import { getFileURLPath } from '../util.js';

export const fileReaderText = (fileName) => {

  let words = {};
    const data = fs.readFileSync(getFileURLPath(fileName), 'utf8').split('\n');
    data.forEach(line => {
        const [title, description] = line.trim().split(/\s+(.+)/);
        words[title] = description.trim();
    });
    return words;
};
