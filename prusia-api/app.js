const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const userRouter = require('./routes/users');
const articleRouter = require('./routes/articles');

// Configuracion express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));


// Configuracion Rutas

app.use('/users', userRouter());
app.use('/articles', articleRouter());



mongoose.connect('mongodb://localhost:27017/camada1667');



app.listen(5000);
console.log('servidor levantado');