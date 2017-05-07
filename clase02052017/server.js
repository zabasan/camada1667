const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;

// Routers para rutas
const rootRouter = require('./routes/root');
const userRouter = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Rutas
app.use('/', rootRouter());
app.use('/users', userRouter());

app.listen(port);

console.log('Arranco el servidor en el puerto: ' + port);