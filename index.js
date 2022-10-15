const fs = require("fs");
const csvFile = fs.readFileSync("./data.csv");
const arr = csvFile.toString().split("\n");

const jsonObj = [];
const header = arr[0].split(",");

for (let i = 1; i < arr.length; i++) {
  let data = arr[i].split(",");
  let obj = {};
  for (let j = 0; j < data.length; j++) {
    obj[header[j].trim()] = data[j].trim();
  }
  jsonObj.push(obj);
}
console.log(jsonObj);
