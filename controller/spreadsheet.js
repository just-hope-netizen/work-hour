const Spreadsheet = require('../models/spreadsheet').default;
import Changeable from '../models/changeable';

exports.getSpreadsheet = async (req, res) => {
    res.render('work', {
      pageTitle: 'work-hour'
    });
};

exports.postSpreadsheet =  async(req, res) => {
    const activity  = req.body.activity;
    const hours = req.body.hours;
    const spreadsheet =  new Spreadsheet(activity, hours);
    spreadsheet.save();
    res.redirect('/')
    
    
    
};
exports.postChangeable =  async(req, res) => {
    const activity  = req.body.activity;
    const hours = req.body.hours;
    const changeable =  new Changeable(activity, hours);
    changeable.save();
    res.redirect('/')
    
    
    
};

