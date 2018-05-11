/*jshint esversion:6*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

let imageSchema = mongoose.Schema({
  userID : [{type:Schema.Types.ObjectId,ref:'User'}],
  link : String,
  name : String,
}, {
  timestamps: true
});

let Image = mongoose.model('Image',imageSchema);

module.exports = Image;
