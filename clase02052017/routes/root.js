const express = require('express');


module.exports = function () {
    const router = express.Router();

    router.get('/', function (req, res) {
        res.json(
            {
                users: '/users',
                items: '/users/{id}/items'
            });
    });

    return router;
};