/*jshint esversion:6*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userSchema');

let logoSchema = mongoose.Schema({
  userID : [{type:Schema.Types.ObjectId,ref:'user'}],
  link : String,
  name : String,
});

let Logo = mongoose.model('logo',logoSchema);

module.exports = Server;
