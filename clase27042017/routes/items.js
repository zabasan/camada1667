const express = require('express');
const itemsData = require('../data/items');

const itemsManager = require('../helpers/listmanager')(itemsData);

module.exports = function(){
    const router = express.Router();

    // Configuracion.

    router.get('/', function(req, res){
        console.log('ITEMS GET');
        res.json(itemsManager.getList());
    });

    router.get('/:id', function(req, res){
        console.log('ITEMS GETsssssss');
        let id = req.params.id;
        res.json(itemsManager.getOne(id));
    });

    router.post('/', function(req, res){
        let item = req.body;
        res.json(itemsManager.add(item))
    });

    router.put('/:id', function(req, res){
        let item = req.body;
        res.json(itemsManager.update(item))
    });

    router.delete('/:id', function(req, res){
        console.log('ITEMS DELETE');
        let id = req.params.id;
        res.json(itemsManager.remove(id))
    });

    return router;

};
