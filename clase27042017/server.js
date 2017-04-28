const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const manInTheMiddle = require('./helpers/maninthemiddle');
const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');

let userdata = require('./data/userdata.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(manInTheMiddle);

// Configuracion de rutas
app.use('/items/', itemsRouter());
app.use('/users/', usersRouter());

app.get('/', function (req, res) {

    res.json({
        appName: 'MyAPI',
        routes: {
            users: '/users/',
            items: '/items'
        }
    })

});

app.listen(8000);
console.log('Arranco el servidor');