const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let db;

MongoClient.connect('mongodb://localhost:27017/camada1667', function (err, database) {

    if(err){
        throw err;
    }
    db = database;
    console.log('ME conecte con exito!');


});


app.get('/', function (req, res) {
    db.collection('users').find({}).toArray(function(err, users){
        res.json(users);
    });
});

app.get('/:id', function (req, res) {
    let id = req.params.id;
    let o_id = new ObjectID(id);

    db.collection('users').findOne({ _id : o_id}, function (err, user) {
        res.json(user);
    })
});

app.post('/', function (req, res) {
    let user = req.body;

    db.collection('users').insertOne(user, function(err, result){
        res.json(result);
    });

});

app.put('/:id', function (req, res) {
    let id = req.params.id;
    let o_id= new ObjectID(id);
    let user = req.body;

    delete user._id;

    db.collection('users').updateOne({ _id : o_id}, { $set: user }, function(err,result ){
        res.json(result);
    });

});

app.delete('/:id', function (req, res) {
    let id = req.params.id;
    let o_id = new ObjectID(id);

    db.collection('users').deleteOne({ _id: o_id}, function (err, result) {
        res.json(result);
    })
});

app.listen(8000);
console.log('Levante mi servidor en 8000');