import express, { Express, Request, Response, NextFunction } from 'express';

import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import dotenv from 'dotenv';

import log from './utils/log';
import routes from './routes';

// get .env-file
dotenv.config();

// setup express
const app: Express = express();

// express middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(compression());

app.use(helmet());
app.use(cors());

// swagger doc ( if development )
if ( process.env.NODE_ENV === 'development' ) {
    const swaggerOptions = {
        definition: {
          openapi: '3.0.0',
          info: {
            title: process.env.SWAGGER_API_NAME || 'Set env SWAGGER_API_NAME',
            version: process.env.SWAGGER_API_VERSION || 'Set env SWAGGER_API_VERSION',
          },
        },
        apis: ['./server/src/routes.ts'], 
      };

      var options = {
          customCss: 'input:disabled, .try-out { display: none !important; }'
      };

    const swaggerSpec = swaggerJSDoc(swaggerOptions);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));
}

// routes
app.use(routes);

// export our app 
export default app;