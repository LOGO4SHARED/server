const Post = require('../models/image')

module.exports = {
  getPostById: (req, res) => {
    Post.find({
      _id: req.params.id
    }).populate('userid').exec()
    .then(post => {
      res.status(200).send({
        message: 'query post success',
        data: post
      })
    })
  },

  getAllPost: (req, res) => {
    let userid = req.headers.decoded.id

    Post
      .find()
      .populate('userid')
      .exec()
      .then(post => {
        res.status(200).send({
          message: 'query all posts success',
          data: post
        })
      })
      .catch(err => {
        res.status(400).send({
          message: err
        })
      })
    },

  getPostByUserId: (req, res) => {
    let userid = req.headers.decoded.id

    Post
      .find({
        userid
      })
      .populate('userid')
      .exec()
      .then(response => {
        res.status(200).send({
          message: 'query posts by user success',
          data: response
        })
      })
      .catch(err => {
        res.status(400).send({
          message: err
        })
      })
  },
  createPost: (req, res) => {
    let userid = req.headers.decoded.id

    let post = new Post({
      userid, image: req.imageURL
    })

    post.save((err, result) => {
        if(err) {
            res.status(400).send({
                message: err.message
            })
        } else {
            res.status(201).send({
                message: 'create post success',
                data: result
            })
        }
    })
  },
  updateImage: (req, res) => {
    let {id} = req.params
    let {image} = req.body

    Post.update({
      _id: id
    }, {
      $set: {
        image
      }
    }, {
      overwrite: false
    }, (err, result) => {
      if(err) {
        res.status(400).send({
            message: 'edit post failed',
            err: err.message
        })
      } else {
        res.status(200).send({
            message: 'edit post success'
        })
      }
    })
  },

  deletePost: ( req, res, next ) => {
    Logo
      .findByIdAndRemove(req.params.id)
      .then( logo => {
        res.status(200).json({
          message: `Logo with id ${req.params.id} deleted`,
          logo
        })
      })
      .catch(err => {
        res.send(err)
      })
  }
}
