const fs = require('fs');
const path = __dirname+'/files/';

fs.readFile(path+'from.txt','utf-8',(formErr,fromData)=>{
    fs.readFile(path+'append.txt','utf-8',(appendErr,appendData)=>{
        fs.writeFile(path+'to.txt',fromData,err=>{if(err) console.log(err)});
        fs.appendFile(path+'to.txt',appendData,err=> {
            if(err) console.log(err);
        });
    });
});