/*jshint esversion:6*/

const Model = require('../models');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports ={
  signup(req,res,next){
    var hash = bcrypt.hashSync(req.body.password, 10);

    Model.User.create({
      email: req.body.email,
      password: hash,
      name : req.body.name,
    })
    .then(data=>{
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  },

  signin(req,res,next){
    Model.User.findOne({
      where:{email:req.body.email}
    })
    .then(data=>{
      var pass = bcrypt.compareSync(req.body.password, data.password);
      if(pass){
        var token = jwt.sign({email : data.email , role : data.role, id : data.id},'secret');
        res.status(200).json({
          token
        })
      }else{
        res.send('password salah');
      }
    })
    .catch((err) => {
      res.send(err)
    })
  },
}
