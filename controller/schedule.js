const Spreadsheet = require('../models/spreadsheet');

exports.getSchedule =  async (req, res) => {
    try{
        Spreadsheet.fetchAll(fileContent =>{
            res.render('index', {
                file:fileContent
            } );

        });
    }
    catch{

    };
};