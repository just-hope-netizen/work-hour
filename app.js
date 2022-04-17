const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended:true }));
app.set('view engine', 'ejs')
app.set('views', 'views')

const scheduleRoutes = require('./routes/schedule');
const spreadsheetRoutes = require('./routes/spreadsheet');

app.use(express.static(path.join(__dirname, 'public')));
app.use(scheduleRoutes);
app.use(spreadsheetRoutes);




app.listen(Port, ()=>{
    console.log('server started at port 4000')});

