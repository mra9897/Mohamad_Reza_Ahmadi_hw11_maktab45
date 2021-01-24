const fs = require('fs');
const fileName = 'newFile.txt';


fs.stat(`${__dirname}/${fileName}`,(err,stat)=>{
    if(stat) console.log('file found');
    else{
        fs.writeFile(`${__dirname}/${fileName}`,'',err=>{if(err) console.log(err)});
        console.log('file created');
    }
});
