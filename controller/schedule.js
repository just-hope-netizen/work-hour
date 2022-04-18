import Spreadsheet from '../models/spreadsheet.js';
import Changeable from '../models/changeable.js';

export const getSchedule = async (req, res) => {
    
    Spreadsheet.fetchAll((fileContent) => {
        res.render('index', {
          pageTitle: 'work-hour',
          file: fileContent,
      });
    });
    
   

};
