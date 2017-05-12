const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const userRouter = require('./routes/users');

// Configuracion Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Inicializo la coneccion a la DB
mongoose.connect('mongodb://localhost:27017/camada1667');


// Configuracion de rutas
app.use('/users', userRouter());

app.listen(8000);
console.log('Mi servidor esta levantado en 8000');