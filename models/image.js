/*jshint esversion:6*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let imageSchema = mongoose.Schema({
  link : String,
  name : String,
  liked : Boolean,
}, {
  timestamps: true
});

let Image = mongoose.model('Image',imageSchema);

module.exports = Image;
