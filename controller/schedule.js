import Spreadsheet from '../models/spreadsheet.js';

export const getSchedule =  async (req, res) => {
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