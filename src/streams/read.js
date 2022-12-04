import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    fs.createReadStream(fileToRead).pipe(process.stdout);
};

await read();