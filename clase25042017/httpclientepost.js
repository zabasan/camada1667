const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    'msg': 'Hello World!'
});

const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (response) => {
    console.log(`STATUS: ${response.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });

    response.on('end', () => {
        console.log('No more data in response.');
    });

});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();