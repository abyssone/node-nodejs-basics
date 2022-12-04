import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {    
    await fs.access(path.join('files', 'text.txt'), (err) => {
        if(err){
            fs.appendFile(path.join(__dirname, 'files', 'text.txt'), 'I am fresh and young', () => {});
        } else {
            throw new Error('FS operation failed');
        }
    });    
};

await create();