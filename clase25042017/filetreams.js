let fs = require('fs');
let readline = require('readline');

let readStream = fs.createReadStream('data.txt', 'utf8');
let writeStream = fs.createWriteStream('output.txt');

let rl = readline.createInterface({
    input: readStream
});

rl.on('line', function (line) {
    console.log('------------');
    console.log(line);

    let array = JSON.parse(line);
    let sum = array.reduce((acc, v) => { return acc + v}, 0);

    writeStream.write( line + ' = ' + sum  + '\n');

    console.log('------------');
});

rl.on('close', function(){
   console.log('Termino la lectura');
    writeStream.end();
});