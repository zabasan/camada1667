const express = require('express');
const userdata = require('../data/userdata');
const listUsers = require('../helpers/listmanager.js')(userdata);
const itemsRouter = require('./items');

module.exports = function () {
    const router = express.Router();

    router.get('/', function (req, res) {
        res.json(listUsers.getList());
    });

    router.get('/:id', function (req, res) {
        let user = listUsers.getOne(req.params.id);
        if (user){
            res.json(user);
        } else {
            res.status(404).json({ message: 'No esta'});
        }
    });

    router.post('/', function (req, res) {
        res.json(listUsers.add(req.body));
    });

    router.put('/:id', function (req, res) {
        res.json(listUsers.update(req.body));
    });

    router.delete('/:id', function (req, res) {
        res.json(listUsers.remove(req.params.id));
    });

    router.use('/:userId/items', itemsRouter());

    return router;
};