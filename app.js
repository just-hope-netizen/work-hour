import {dirname, join } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const Port = process.env.PORT || 4000;

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs')
app.set('views', 'views')

import scheduleRouter from './routes/schedule.js';
import spreadsheetRouter from './routes/spreadsheet.js';
app.use(express.static(join(__dirname, 'public')));
app.use(scheduleRouter);
app.use(spreadsheetRouter);




app.listen(Port, ()=>{
    console.log('server started at port 4000')});

