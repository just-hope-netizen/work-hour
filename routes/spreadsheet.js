import express from 'express';

const spreadsheetRouter = express.Router();
import{getSpreadsheet, postSpreadsheet, postChangeable} from '../controller/spreadsheet.js';

spreadsheetRouter.get('/schedule', getSpreadsheet);

spreadsheetRouter.post('/schedule', postSpreadsheet);

spreadsheetRouter.post('/changeable', postChangeable);

export default spreadsheetRouter;
