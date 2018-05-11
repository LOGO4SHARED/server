'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../helpers/images'),
      {createPost,getAllPost}= require('../controllers/image.controller')

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' })
})


router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS, createPost)
  // (req, res) => {
  //   res.send({
  //     status: 200,
  //     message: 'Your file is successfully uploaded',
  //     link: req.file.cloudStoragePublicUrl
  //   })
  // })

router.get('/all',getAllPost)

module.exports = router
