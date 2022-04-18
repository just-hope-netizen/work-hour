import {dirname, join } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const Port = process.env.PORT || 4000;

app.use(express.json(), (req, res)=>{
    res.set('Accept', 'text/html');
} );
app.set('view engine', 'ejs')
app.set('views', 'views')

// look up ESmodule implementation
import router from './routes/schedule.js';
// import spreadsheetRouter from './routes/spreadsheet';
app.use(express.static(join(__dirname, 'public')));
app.use(router);
// app.use(spreadsheetRouter);




app.listen(Port, ()=>{
    console.log('server started at port 4000')});

