/*jshint esversion:6*/

var express = require('express');
var router = express.Router();
const usersRouter = require('./users');
const User = require('../models/user')
const { signUp, signIn } = require ('../controllers/index.controller.js');
const { isAuth } = require('../middleware/authLogin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', signUp)
router.post('/signin', signIn)

module.exports = router;
