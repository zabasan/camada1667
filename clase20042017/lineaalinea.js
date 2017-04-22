let fs = require('fs');
let readline = require('readline');

let data = '';

let readStream = fs.createReadStream('data.csv', 'utf8');

let rl = readline.createInterface({
    input: readStream,
    ouput: wrireStream
});

rl.on('line', function (line) {
    console.log('------------');
    console.log(line);
    console.log('------------');
});