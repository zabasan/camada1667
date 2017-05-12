/**
 * Esta es la ruta de usuarios.
 *
 */


const express = require('express');
const User =require('../models/user');
const authorArticlesRouter = require('./authorarticles');

module.exports = function () {
  const router = express.Router();

  
  router.get('/', function (req, res) {
      User.find({})
          .then(users => {
              res.json(users)
      })
  });

  router.get('/:id', function (req, res) {
      let id = req.params.id;

      User.findById(id)
          .then(user => {
              res.json(user);
          })
  });

 router.post('/', function (req, res) {
     data = req.body;

     let user = new User(data);
     user.save().then(result => res.json(result));
     console.log('se generó el usuario: ' + user.fullname());

 });

 router.put('/:id', function (req, res) {
     let userData = req.body;
     let id = req.params.id;

     User.findByIdAndUpdate(id, userData).then(result => res.json(result));

 });

 router.delete('/:id', function (req, res) {
     let id = req.params.id;
     let o_id = new ObjectID(id);

     User.findByIdAndRemove(id).then(result => res.json(result));
 });

    router.use('/:userId/articles', authorArticlesRouter());
  
  return router;
};
