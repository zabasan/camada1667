let getData = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve({id : value});
        }, 1000)
    });
};

// Async y Await.

async function milogica(){
    let usuario1 = await getData(1);
    console.log(usuario1);
    let usuario2 = await getData(2);
    console.log(usuario2);

    return usuario1.id + usuario2.id;
}

let l = milogica().then(imprime);

console.log(l);

function imprime(value) {
    console.log('----------');
    console.log('El valor es:' + value);
    console.log('---------')
}