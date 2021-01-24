const fs = require('fs');
const fileName = 'newFile.txt';

let checkFile = fs.existsSync(`${__dirname}/${fileName}`);

if(checkFile) console.log('found');
else {
    fs.writeFileSync(`${__dirname}/${fileName}`,'');
    console.log('created');
}