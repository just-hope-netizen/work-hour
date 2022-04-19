import Spreadsheet from '../models/spreadsheet.js';
import Changeable from '../models/changeable.js';

export const getSpreadsheet= async(req, res)=> {
    res.render('work', {
      pageTitle: 'work-hour'
    });
}

export const postSpreadsheet = async(req, res)=> {
    const activity  = req.body.activity;
    const hours = req.body.hours;
    const spreadsheet =  new Spreadsheet(activity, hours);
    spreadsheet.save();
    res.redirect('/')
    
    
    
}
export const postChangeable = async(req, res)=> {
    // fetch data and save
    const activity  = req.body.activity;
    const hours = req.body.hours;
    const changeable =  new Changeable(activity, hours);
    changeable.save();
    res.redirect('/')
    
    
    
}

