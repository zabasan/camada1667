const express = require('express');
const usersData = require('../data/userdata');

const usersManager = require('../helpers/listmanager')(usersData);

module.exports = function(){
    const router = express.Router();

    // Configuracion.

    router.get('/', function(req, res){
        console.log('ITEMS GET');
        res.json(usersManager.getList());
    });

    router.get('/:id', function(req, res){
        console.log('ITEMS GETsssssss');
        let id = req.params.id;
        res.json(usersManager.getOne(id));
    });

    router.post('/', function(req, res){
        let user = req.body;
        res.json(usersManager.add(user))
    });

    router.put('/:id', function(req, res){
        let user = req.body;
        res.json(usersManager.update(user))
    });

    router.delete('/:id', function(req, res){
        console.log('ITEMS DELETE');
        let id = req.params.id;
        res.json(usersManager.remove(id))
    });

    return router;

};
