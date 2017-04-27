let getUser = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ id: value, name: 'MyNombre'} );
        }, 1000);
    })
};

let getComments = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ id: value, comment: 'comment'} );
        }, 1000);
    })
};

/*
getUser(1).then( u => {
 console.log(u);
 getComments(1).then( c => {
 console.log(c)
 })
 });
* */

Promise.all([
    getUser(1),
    getComments(1)
]).then( arrayResutl => {
    console.log(arrayResutl);
});



console.log('Corro Primero');