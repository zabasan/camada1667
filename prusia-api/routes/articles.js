const express =require('express');
const Articles = require('../models/article');
const articleCommentsRouter = require('./articlecomments');

module.exports = function () {
    const router = express.Router();

    router.get('/', function (req, res) {
        Articles.find({}).then(articles => res.json(articles));
    });

    router.get('/:id', function (req, res) {
        let id = req.params.id;

        Articles.findById(id).then(article => res.json(article));
    });

    router.use('/:articleId/comments', articleCommentsRouter());

    return router;
};

