import * as path from 'path';
import {promises as fs} from 'fs';

const oldFilename = path.join('files', 'wrongFilename.txt');
const newFilename = path.join('files', 'properFilename.md');

const isExists = async (path) => {
    try{
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
};

const rename = async () => {
    if(await isExists(newFilename)){
        throw new Error('FS operation failed');
    } else {
        try{
            await fs.rename(oldFilename, newFilename);
        } catch {
            throw new Error('FS operation failed');
        }  
    }
};

await rename();