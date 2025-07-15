import json from './data.json' assert { type: 'json' };

// console.log(json)
let data = JSON.stringify(json);
let dataBaru = JSON.parse(data);

console.log('typeof json')
console.log(typeof json)
console.log('typeof data')
console.log(typeof data)
console.log('typeof dataBaru')
console.log(typeof dataBaru)
