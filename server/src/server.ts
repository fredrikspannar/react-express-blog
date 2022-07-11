import app from './app';
import dotenv from 'dotenv';
import cluster, {Worker} from 'cluster';
import dbConnect from './utils/db';
import log from './utils/log';

// get .env-file
dotenv.config();

const instances = process.env.INSTANCES ? process.env.INSTANCES : 1; // default to 1 if not set
const port = process.env.PORT || 8080;
const dsn = process.env.DATABASE_DSN || false;

if (!dsn) {
    log('error','No env for DATABASE_DSN');
    process.exit(1);
}

if (cluster.isPrimary) {
    log('info', `Slave processes to run: ${instances}`);
    log('info', `Master ${process.pid} is running in enviroment ${process.env.NODE_ENV}`);
 
  // Fork workers
  for (let i = 0; i < instances; i++) { // skip data annotation here since instances is a string and we have to use shortcuts to get around errors (number<->string)
    const worker:Worker = cluster.fork( { workerNum:(i+1) } ); // attach workerNum as enviroment for this forked process

    worker.on('exit', (code:number, signal:string) => {
      if (signal) {
        log('warn', `worker was killed by signal: ${signal}`);
      } else if (code !== 0) {
        log('error', `worker exited with error code: ${code}`);
      } else {
        log('info', 'worker success!');
      }
    });    
  }
 
} else {
  // start new instance

  dbConnect(dsn)
    .then(()=>{
        log('info', 'Connected to MongoDB');

        app.listen(port, () => {
            log('info', `⚡️ App is running at http://localhost:${port}`);
        });

    })
    .catch((err:any) => {
        log('error', err);
        process.exit(1);
    });


}
