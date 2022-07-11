import { Router, Request, Response, NextFunction } from 'express';

import { getPage, addPage } from './controllers/pageController';
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
 *         description: Returns a mysterious object with the fetched page.
 */
router.get('/page/:slug', getPage);


/**
 * @openapi
 * /page:
 *   post:
 *     description: Create a new page
 *     parameters:
 *       - name: title
 *         in: formdata
 *         required: true
 *         type: string
 *         description: title of page
 *     responses:
 *       200:
 *         description: Returns a mysterious object with the created page.
 */
 router.post('/page', addPage);

// export routs to app
export default router;