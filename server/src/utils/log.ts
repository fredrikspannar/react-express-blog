import bunyan from 'bunyan';
import moment  from 'moment';

const logger = bunyan.createLogger(
    {
        name: "react-express-blog",
        streams: [
            {
                level: 'debug',
                stream: process.stdout      
            },
            {
                level: 'warn',
                stream: process.stdout      
            },              
            {
                level: 'error',
                stream: process.stdout
            },
            /*{
                level: 'info',  // level info is default, if we add this there will be double output
                stream: process.stdout   
            } */                       
        ]
    }
);

const log = (type:string = 'info', message:string) => {
    logger.fields.time = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    const workerNum = process.env.workerNum ? `[worker ${process.env.workerNum}] - ` : ''; // attached enviroment from cluster.fork

    switch(type.toLowerCase()) {
        case 'debug': logger.debug(`${workerNum}${message}`); break;
        case 'warn': logger.warn(`${workerNum}${message}`); break;
        case 'error': logger.error(`${workerNum}${message}`); break;
        default: logger.info(`${workerNum}${message}`); break;
    }
}

export default log;