import * as path from 'path';
import {promises as fs} from 'fs';

const PathToScan = 'files';


const list = async () => {
    let filesDirent, filesArray;
    try{
        filesDirent = await fs.readdir(PathToScan, {withFileTypes: true});
    } catch {
        throw new Error('FS operation failed');
    }    
    filesArray = filesDirent.map(elem => elem.name);
    for(let file of filesArray){
        console.log(file);
    }    
};

await list();