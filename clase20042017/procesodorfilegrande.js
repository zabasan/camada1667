const csv = require('csvtojson');
const _ = require('lodash');

let myfile = './data.csv';

let sum = 0;
let count = 0;

csv()
    .fromFile(myfile)
    .on('json', obj => {
        sum = sum + parseInt(obj.edad);
        count++;
    })
    .on('end', ()=>{
        console.log('Lei todos los registros');
        console.log('El Promedio es: ');
        console.log ( sum / count );

    });