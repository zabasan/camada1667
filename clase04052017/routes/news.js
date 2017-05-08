let express = require('express');
let router = express.Router({ mergeParams: true });
let models = require('../models');

let News = models.News;

/* GET users listing. */
router.get('/', function(req, res) {
    News
        .findAll({
            where: {
                authorId: req.params.authorId
            }
        })
        .then(newss => {
            res.json(newss)
        })
        .catch( e => {
            res.json(e)
        })
});

router.get('/:id', function(req, res) {
    News
        .findOne({
            where: {
                id: req.params.id,
                authorId: req.params.authorId
            }
        })
        .then(news => {
            if (news){

                res.json(news)
            } else {
                res.status(404).json({ message: 'No hay gato'});
            }
        })
        .catch( e => {
            res.status(500).json(e)
        })

});

router.post('/', function(req, res){
    let news = req.body;

    news.authorId = req.params.authorId;

    News
        .build(news)
        .save()
        .then( n => {
            console.log(n.id);
            res.json(n);
        })
        .catch( e => {
            res.json(e);
        })

});

router.put('/:id', function (req, res) {
    let news = req.body;

    delete news.id;

    News.update(news, {
        where : {
            id: req.params.id,
            authorId: req.params.authorId
        }
    })
        .then( r => {
            res.json({ message: 'Usuario id: ' + req.params.id + " actualizado"})
        })
        .catch( e => {
            res.json(e);
        })
});

router.delete('/:id', function (req, res) {

    News.destroy({
        where: {
            id: req.params.id,
            authorId: req.params.authorId
        }
    })
        .then(r => {
            res.json({ message: 'Usuario borrado: '+ req.params.id})
        })
        .catch( e => {
            res.json(e);
        })

});

module.exports = router;
