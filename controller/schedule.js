const Spreadsheet = require('../models/spreadsheet');

exports.getSchedule =  async (req, res) => {
    try{
        Spreadsheet.fetchAll(fileContent =>{
            res.render('index', {
                pageTitle: 'work-hour',
                file:fileContent
            } );

        });
    }
    catch{

    };
};