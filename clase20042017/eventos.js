const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

let e = new MyEmitter();

e.on('verde', function () {
    console.log('Se puso en verde el semaforo');
});

e.on('rojo', function () {
   console.log('Se puso en ROJO el semaforo')
});

e.emit('verde');

setTimeout( function () {
    e.emit('rojo')
}, 2000);
