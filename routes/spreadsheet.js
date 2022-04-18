import express from 'express';

const router = express.Router();
import{getSpreadsheet, postSpreadsheet, postChangeable} from '../controller/spreadsheet.js';

router.get('/schedule', getSpreadsheet);

router.post('/schedule', postSpreadsheet);

router.post('/changeable', postChangeable);

// export default router;
