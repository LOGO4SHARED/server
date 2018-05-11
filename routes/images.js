const express = require('express');
const router = express.Router();
const uploadMidleware = require('../middleware/upload')
const {getAllPost, getPostById, getPostByUserId, createPost, updateImage, deletePost} = require('../controllers/image.controller.js')
const {isAuth} = require('../middleware/authLogin')

router
    .get('/id/:id', getPostById)
    .get('/all', isAuth, getAllPost)
    .get('/user', isAuth, getPostByUserId)
    .post('/', isAuth, uploadMidleware.multer('image'), uploadMidleware.upload, createPost)
    .put('/:id', isAuth, updateImage)
    .delete('/:id', isAuth, deletePost)

module.exports = router;
