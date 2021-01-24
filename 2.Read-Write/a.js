const fs = require('fs');
const FILES_PATH = __dirname+'/files/';
fs.readFile(FILES_PATH+'from.txt','utf-8', (err,data)=>{
    if(err) return console.log(err);
    fs.writeFile(FILES_PATH+'to.txt',data ,err=>{if(err) return  console.log(err)});
});