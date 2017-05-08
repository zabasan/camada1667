let express = require('express');
let router = express.Router({ mergeParams: true });
let models = require('../models');

let News = models.News;

router.get('/', function (req, res) {
    let query = req.query;

    let consulta = {
        where: {
        },
        include : [
            { model: models.User, as: 'author' }
        ]
    };

    if (query.authorId){
        consulta.where.authorId = query.authorId;
    }


    News
        .findAll(consulta)
        .then(newss => res.json(newss));

});

module.exports = router;