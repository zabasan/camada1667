const express = require('express');
let itemsData = require('../data/items');

module.exports = function () {
    const router = express.Router({ mergeParams: true });

    router.get('/', function (req, res) {
        console.log(req.params.userId);
        res.json(itemsData.filter( item => item.userId == req.params.userId));
    });

    router.get('/:id', function (req, res) {
        res.json(itemsData.find( item => item.id == req.params.id && item.userId == req.params.userId));
    });

    router.post('/', function (req, res) {
        let item = req.body;

        item.userId = req.params.userId;

        itemsData.push(item);

        res.json(item);

    });

    router.put('/:id', function (req, res) {
        let old = itemsData.find( item => item.id == req.params.id && item.userId == req.params.userId);

        old.title = req.body.title;

        res.json(old);

    });

    router.delete('/:id', function (req, res) {
        itemsData = itemsData.filter( item => !(item.id == req.params.id && item.userId == req.params.userId));
        res.json({message : 'deleted' });

    });

    return router;
};