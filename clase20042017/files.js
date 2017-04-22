let fs = require('fs');

/*fs.readFile('./data.txt', 'utf8', function (err,data) {
 if (err){
 throw err;
 }

 console.log(data);
 });*/

let fsProm = function (filename, options){
    return new Promise(function(resolve, reject){
        fs.readFile(filename, options, function (err, data) {
            if (err){
                reject(err)
            }
            resolve(data);
        })
    })
};

fsProm('./data.txt', 'utf8')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {

    });

