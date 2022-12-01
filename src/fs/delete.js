import * as path from 'path';
import {promises as fs} from 'fs';

const fileToRemove = path.join('files', 'fileToRemove.txt');

const remove = async () => {
    try{
        fs.rm(fileToRemove);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();

