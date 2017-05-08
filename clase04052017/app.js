var express = require('express');
var bodyParser = require('body-parser');

var usersRouter = require('./routes/users');
let newsPortadaRouter = require('./routes/newsportada');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/news', newsPortadaRouter);

module.exports = app;
