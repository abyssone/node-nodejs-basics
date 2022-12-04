import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    process.stdout.write('Ctrl+C for exit\n');
    process.stdin.pipe(fs.createWriteStream(fileToWrite));
};

await write();