
function hacerAlgo(){
    console.log('Hacer algo');
    return 10;
}

function algoMAs(d) {
    return d + 10;
}

let timeoutProm = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(hacerAlgo());
    }, 1000);
});


timeoutProm
    .then(algoMAs)
    .then( r => console.log(r));