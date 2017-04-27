const co = require('co');

let getData = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve({id : value});
        }, 1000)
    });
};

co(function* () {
    let usuario1 = yield getData(1);
    console.log(usuario1);
    let usuario2 = yield getData(2);
    console.log(usuario2);

    return usuario1.id + usuario2.id;
})
    .then(function (value) {
        console.log(value);
    });