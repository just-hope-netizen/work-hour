import { readFile, writeFile } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const p = join(__dirname, '../data', 'changeable.json');

 const getProductsFromFile = cb => {
  readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};


export default class Changeable {
  constructor(activity, hours) {
    this.activity = activity;
    this.hours = hours;
  }

  save() {
    readFile(p, (err, fileContent) => {
      let changeableSpreadsheet = [];
      if (!err) {
        changeableSpreadsheet = JSON.parse(fileContent);
      }
      changeableSpreadsheet.push(this);
      writeFile(p, JSON.stringify(changeableSpreadsheet), (err, fileContent) => {
        console.log(err);
      });
    });
  }
 
  get product() {
    return 'fucking hell!!'
  }
   static fetchAll(cb) {
    getProductsFromFile(cb)
  }
}
