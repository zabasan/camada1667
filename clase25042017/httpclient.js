let http = require('http');

let options = {
    host: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/users/1'
};

http.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data',function(data){
        let user = JSON.parse(data);
        console.log(user.id);
    })
});