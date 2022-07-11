import { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import PageModel from '../models/PageModel';

import log from '../utils/log';

export const getPage = (req:Request, res:Response) => {

    log('debug', 'GET request /');

    res.status(200).send('Root here!');

}