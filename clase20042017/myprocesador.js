const csv = require('csvtojson');
const _ = require('lodash');

let myfile = './data.csv';

let usuarios = [];

csv()
.fromFile(myfile)
.on('json', obj => {
    //console.log(obj);
    usuarios.push(obj);
})
.on('end', ()=>{
    console.log('Lei todos los registros');

    let sum = usuarios.reduce(function (acc, user) {
        //console.log(acc);
        return acc + parseInt(user.edad);
    }, 0);

    console.log('Edad promedio: ' + sum / usuarios.length);

    let actualizada = usuarios.map(user => {
        user.rol = user.rol + 'A';
        return user;
    });

    //console.log(actualizada);

    let agrupado = _.groupBy(actualizada, 'rol');

    console.log(agrupado);

});