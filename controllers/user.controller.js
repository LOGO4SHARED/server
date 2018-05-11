const User = require('../models/user')


module.exports = {
  createUser : ( req, res, next ) => {
    const newUser = new User(req.body)
    newUser
      .save()
      .then(() => {
        res
          .status(200)
          .json({
            message: 'Added user successfully',
            user: newUser
          })
      })
      .catch((err) => {
        res
          .send(err)
      })
  },

  findAll: ( req, res, next ) => {
    User
      .find()
      .then(users => {
        res
          .status(200)
          .json({
            message: 'All Users',
            users
          })
      })
      .catch(err => {
        res
          .status(500)
          .json({
            message: err
          })
      })
  },

  findById: ( req, res, next ) => {
    User
      .findById(req.params.id)
      .then(user => {
        res
          .status(200)
          .json({
            message: `User's detail`,
            user
          })
      })
      .catch( err => {
        res
          .status(500)
          .json({
            message: err
          })
      })
  },

  update: ( req, res, next ) => {
    User
      .findByIdAndUpdate( req.params.id, req.body)
      .then(userUpdated => {
        res
          .status(200)
          .json({
            message: `User with id ${req.params.id} updated`,
            userUpdated
          })
      })
      .catch(err => {
        res.status(500).json({
          err
        })
      })
  },

  delete: ( req, res, next ) => {
    User
      .findByIdAndRemove(req.params.id)
      .then( user => {
        res.status(200).json({
          message: `User with id ${req.params.id} deleted`,
          user
        })
      })
      .catch(err => {
        res.send(err)
      })
  }
}
