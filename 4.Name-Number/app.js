const fs = require('fs');
const message = {
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
        if(result.hasOwnProperty(key))
            result[key] = [result[key],val];
        else
            result[key] = val;
    });
    return result;
}
const objectFind = (obj, targetKey) => {
    let result = [];
    for (const [key, value] of Object.entries(obj)) {
        if(key === targetKey) result.push(value);
    }
    return result;
}
const printNamesNumber = (names, numbers) => {
    for (const [index, value] of Object.entries(names)) {
        if(names.hasOwnProperty(index)){
            let num = objectFind(numbers, index);
            if(num.length === 0) console.log(`${value} ${message.zero}`);
            else if (typeof num[0] === 'string') console.log(`${value}${message.one}${num[0]}`);
            else console.log(`${value}${message.many}${num.join(',')}`);
        }
    }
}

let names = makeArray(fs.readFileSync(__dirname+'/names.txt',"utf-8").split("\r\n"));
let numbers = makeArray(fs.readFileSync(__dirname+'/numbers.txt',"utf-8").split("\r\n"));

printNamesNumber(names, numbers);