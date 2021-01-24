const fs = require('fs');
const FILES_PATH = __dirname+'/files/';

let from = fs.readFileSync(FILES_PATH+'from.txt','utf-8');
if (from) fs.writeFileSync(FILES_PATH+'to.txt',from);