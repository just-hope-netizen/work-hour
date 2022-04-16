const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.set('view engine', 'ejs')
app.set('views', 'views')

const scheduleRoutes = require('./routes/schedule');
const spreadsheetRoutes = require('./routes/spreadsheet');

app.use(express.static(path.join(__dirname, 'public')));
app.use(scheduleRoutes);
app.use(spreadsheetRoutes);




app.listen(4000, ()=>{
    console.log('server started at port 4000')});

