import { Transform } from 'stream';

class TransfomnStream extends Transform{
    constructor(){
        super();
    }
    _transform(chunk, enc, cb){
        let chunkString = chunk.toString();
        chunkString = chunkString.split('').reverse().join('').replaceAll('\n', '');
        this.push(chunkString);
        this.push('\n');
        cb();
    }
}

const transformStream = new TransfomnStream();

const transform = async () => {
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();