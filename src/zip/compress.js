import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const destFile = path.join(__dirname, 'files', 'archive.gz');

const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destFile);
const gzip = createGzip();

const compress = async () => {
    pipeline(
        readStream,
        gzip,
        writeStream,
        (err) => {
            if(err) console.log(err.message);
        }
    )
};

await compress();