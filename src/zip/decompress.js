import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.join(__dirname, 'files', 'archive.gz');
const destFile = path.join(__dirname, 'files', 'fileToCompress.txt');

const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destFile);
const unzip = createUnzip();

const decompress = async () => {
    pipeline(
        readStream,
        unzip,
        writeStream,
        (err) => {
            if(err) console.log(err.message);
        }
    )
};

await decompress();