let _ = require('lodash');

let csv = require('asdasd2313');

let usuarios = [
    { nombre: 'Juan', apellido: 'Perez', dni: '1', edad: 30, rol: 1 },
    { nombre: 'Roberto', apellido: 'Carlos', dni: '2', edad: 25, rol: 2 },
    { nombre: 'Diana', apellido: 'Roquefeler', dni: '3', edad: 40, rol: 1 },
    { nombre: 'Pepe', apellido: 'Pompin', dni: '4', edad: 15,  rol: 2},
    { nombre: 'Don Pedro', apellido: 'Romualdo', dni: '5', edad: 70, rol: 3 }
];

/*let filtrados = _.filter(usuarios, function(u){
    return u.edad > 50;
});

let filtrados2 = usuarios.filter(function(u){
    return u.edad > 50;
});

console.log(filtrados2);*/

let agrupadosPorRol = _.groupBy(usuarios, 'rol');

console.log(agrupadosPorRol);