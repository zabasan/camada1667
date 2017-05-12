const express = require('express');
const Article = require('../models/article');


module.exports = function () {
    const router = express.Router({ mergeParams : true});

    router.get('/', function (req, res) {
        Article
            .find({})
            .then(articles => res.json(articles));

    });

    router.get('/:id', function (req, res) {
        // findById
    });

    router.post('/', function (req, res) {
        // new Article(data);
        // let authorId = req.params.userId
        // article.save()
    });

    router.put('/:id', function (req, res) {
        // findByIdAndUpdate(id, data)
    });

    router.delete('/:id', function (req, res) {
        // findByIdAndRemove
    });

    return router;
};
