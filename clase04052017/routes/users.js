let express = require('express');
let router = express.Router();
let models = require('../models');
let User = models.User;
const newsRouter = require('./news');


/* GET users listing. */
router.get('/', function(req, res) {

    User
        .findAll()
        .then(users => {
            res.json(users)
        })
        .catch( e => {
            res.json(e)
        })

});

router.get('/:id', function(req, res) {

    User
        .findOne({ where: { id: req.params.id }})
        .then(user => {
            if (user){

                res.json(user)
            } else {
                res.status(404).json({ message: 'No hay gato'});
            }
        })
        .catch( e => {
            res.status(500).json(e)
        })

});

router.post('/', function(req, res){
    let user = req.body;

    User
        .build(user)
        .save()
        .then( u => {
            console.log(u.id);
            res.json(u);
        })
        .catch( e => {
            res.json(e);
        })

});

router.put('/:id', function (req, res) {
    let user = req.body;

    delete user.id;

    User.update(user, {
        where : {
            id: req.params.id
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

    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(r => {
            res.json({ message: 'Usuario borrado: '+ req.params.id})
        })
        .catch( e => {
            res.json(e);
        })

});

router.use('/:authorId/news', newsRouter);

module.exports = router;
