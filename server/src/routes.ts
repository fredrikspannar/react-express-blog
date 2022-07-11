import { Router, Request, Response, NextFunction } from 'express';

import { getPage } from './controllers/pageController';
import log from './utils/log';

const router = Router();


/**
 * @openapi
 * /page/(:slug):
 *   get:
 *     description: Get page by slug. Like for example GET /page/about
 *     parameters:
 *       - name: slug
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns a mysterious object with the page.
 */
router.get('/page/:slug', getPage);



// export routs to app
export default router;