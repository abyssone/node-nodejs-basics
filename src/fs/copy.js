import * as path from 'path';
import {promises as fs} from 'fs';
import {fileURLToPath} from 'url';

const moduleDir = path.dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(moduleDir, 'files');
const destinationPath = path.join(moduleDir, 'files-copy');




const copy = async () => {
    try{
        await fs.cp(sourcePath, destinationPath, {recursive: true, errorOnExist: true, force: false});
    } catch {        
        throw new Error('FS operation failed');
    }
};

copy();