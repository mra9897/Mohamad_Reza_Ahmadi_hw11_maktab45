const fs = require('fs');
const FILE_PATH = __dirname+'/files/';
const MESSAGE = {
    zero: "hasn't any phone number.",
    one: "'s phone number is ",
    many: "'s phone numbers are "
}
const makeArray = arr => {
    let result = {};
    arr.forEach(value=>{
        if(!value) return;
        let [key, val] = value.split('-').map(item=>item.trim());
        // if key is defined [add] new value | dont replace value
        if(result.hasOwnProperty(key)) result[key] = [...result[key],val];
        else result[key] = [val];
    });
    return result;
}
const objectFind = (obj, targetKey) => {
    for (const [key, value] of Object.entries(obj))
        if(key === targetKey) return value;
   return [];
}
const printResult = data => {
    console.log(data);
    fs.appendFileSync(FILE_PATH+"result.txt",data+"\n");
}
const mergeNamesNumbers = (names, numbers) => {
    // delete last data
    fs.writeFileSync(FILE_PATH+"result.txt","");
    for (const [key, value] of Object.entries(names)) {
        let num = objectFind(numbers, key);
        if(num.length === 0) printResult(`${value} ${MESSAGE.zero}`);
        else if (num.length === 1) printResult(`${value}${MESSAGE.one}${num[0]}`);
        else printResult(`${value}${MESSAGE.many}${num.join(',')}`);
    }
}

let names = makeArray(fs.readFileSync(FILE_PATH+'names.txt',"utf-8").split("\r\n"));
let numbers = makeArray(fs.readFileSync(FILE_PATH+'numbers.txt',"utf-8").split("\r\n"));

mergeNamesNumbers(names, numbers);