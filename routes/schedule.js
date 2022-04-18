import express from 'express';

const router = express.Router();
import { getSchedule } from '../controller/schedule.js'

router.get('/', getSchedule);

export default router;
