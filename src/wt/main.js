import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerFile = path.join(__dirname, 'worker.js');
const cpusArr = cpus();

const createWorker = (processedValue) => {
    return new Worker(workerFile, { workerData: processedValue });
}


const performCalculations = async () => {
    Promise.allSettled(cpusArr.map((cpu, index) => {
        return new Promise((resolve, reject) => {
            let worker = createWorker(index + 10);
            worker.on('message', (msg) => {
                resolve(msg);
            })
            worker.on('error', (err) => {
                reject(err);
            })
        })
    })).then(results => {
        results.map((result) => {
            if(result.status === 'fulfilled'){
                result.status = 'resolved';
                result.data = result.value;
            } else {
                result.status = 'error';
                result.data = null;
                delete result.reason
            }
            delete result.value;
        });
        console.log(results);
    })
};

await performCalculations();