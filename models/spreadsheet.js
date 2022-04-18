import { readFile, writeFile } from 'fs';
import { join, dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const p = join(__dirname, '../data', 'activity.json');


export default class Spreadsheet {
  constructor(activity, hours) {
    this.activity = activity;
    this.hours = hours;
  }

  save() {
      
      readFile(p, (err, fileContent) =>{
        let spreadsheet= [];
        if(!err){
            spreadsheet = JSON.parse(fileContent);
        }
          
        spreadsheet.push(this)
            writeFile(p, JSON.stringify(spreadsheet), (err, fileContent) => {
                console.log(err);
            })
        

      })
  }

  static fetchAll(cb){
      readFile(p, (err, fileContent)=>{
          if (err) {
             cb([]); 
          }else{
              cb(JSON.parse(fileContent));
          }
      });
  }
};
