const express = require('express');

const Comments = require('../models/comment');

module.exports = function () {
    const router = express.Router({mergeParams: true});

    router.get('/', function (req,res) {
       Comments.find({}).then(result => res.json(result));
    });

    router.post('/', function (req, res) {
        let articleId = req.params.articleId;
        let data = req.body;
        let comment = new Comments(data);

       comment.save().then(result => res.json(result));
    });






    return router;
};
