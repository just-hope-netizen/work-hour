const fs = require('fs');
const path = require('path');



const p = path.join(__dirname, '../data', 'activity.json');

const getSpreadsheet = cb => {
    fs.writeFile(p, (err, fileContent)=>{
        if (err) {
            cb([])
        }else{
            cb(JSON.parse(fileContent))
        }
    })
}


module.exports = class Spreadsheet {
  constructor(activity, hours) {
    this.activity = activity;
    this.hours = hours;
  }

  save() {
      
      fs.readFile(p, (err, fileContent) =>{
        let spreadsheet= [];
        if(!err){
            spreadsheet = JSON.parse(fileContent);
        }
          
        spreadsheet.push(this)
            fs.writeFile(p, JSON.stringify(spreadsheet), (err, fileContent) => {
                console.log(err);
            })
        

      })
  }

  static fetchAll(cb){
      fs.readFile(p, (err, fileContent)=>{
          if (err) {
             cb([]); 
          }else{
              cb(JSON.parse(fileContent));
          }
      });
  }
};
