import express from 'express';

const scheduleRouter = express.Router();

import { getSchedule } from '../controller/schedule.js'

scheduleRouter.get('/', getSchedule);

export default scheduleRouter;
