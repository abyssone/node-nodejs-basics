import * as path from 'path';
import {promises as fs} from 'fs';

const fileToRead = path.join('files', 'fileToRead.txt');

const read = async () => {
    let content;
    try {
        content = await fs.readFile(fileToRead, {encoding: 'utf8'});
    } catch {
        throw new Error('FS operation failed');
    }
    console.log(content);
};

await read();