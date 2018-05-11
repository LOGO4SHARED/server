/*jshint esversion:6*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userSchema');

let serverSchema = mongoose.Schema({
  members : [{type:Schema.Types.ObjectId,ref:'user'}]
});

let Server = mongoose.model('server',serverSchema);

module.exports = Server;
