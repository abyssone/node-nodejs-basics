import * as path from 'path';
import {promises as fs} from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    let data;
    try{
        data = await fs.readFile(fileToRead, {encoding: 'utf8'});
    } catch(err) {
        console.log(err.message);
    }
    let hash = crypto.createHash('sha256').update(data).digest('hex');
    console.log(hash);
};

await calculateHash();