/*jshint esversion:6*/

var express = require('express');
var router = express.Router();
const User = require('../schema/userSchema');
const Server = require('../schema/serverSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
