const fs = require('fs');
const path = __dirname+'/files/';

let fromData = fs.readFileSync(path+'from.txt','utf-8');
let appendData = fs.readFileSync(path+'append.txt','utf-8');
let to = fs.writeFileSync(path+'to.txt',fromData);
let append = fs.appendFileSync(path+'to.txt',appendData);
if(to && append) console.log(to, append);