import { Router, Request, Response, NextFunction } from 'express';
import log from './utils/log';

const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string with a root.
 */
router.get('/', (req:Request, res:Response) => {

    log('debug', 'GET request /');

    res.status(200).send('Root here!');
});



// export routs to app
export default router;