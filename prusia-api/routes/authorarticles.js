const express = require('express');
const Article = require('../models/article');



module.exports = function () {
    const router = express.Router({mergeParams: true});

    router.get('/', function (req, res) {
        Article.find({}).then(articles => res.json(articles))
    });

    router.get('/:id', function (req, res) {
        let id = req.params.id;
        Article.findById(id).then(article => res.json(article));
    });

    router.post('/', function (req, res) {
        let authorId = req.params.userId;
        let data = req.body;
        let article = new Article(data);
        article.save().then(article => res.json(article));
        console.log('el articulo ha sido creado correctamente');
    });

    router.put('/:id', function (req, res) {
        let id = req.params.id;
        let data = req.body;

        Article.findByIdAndUpdate(id, data).then(result => res.json(result));
        console.log('el articulo ' + id + 'ha sido modificado correctamente');
    });

    router.delete('/:id', function (req, res) {
        let id = req.params.id;

        Article.findByIdAndRemove(id).then(result =>res.json(result));
        console.log('el articulo ' + id + 'ha sido borrado correctamente');
    });




    return router;
};