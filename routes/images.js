const express = require('express');
const router = express.Router();
const uploadMidleware = require('../middleware/upload')
const {getAllPost, getPostById, getPostByUserId, createPost, updateImage, deletePost} = require('../controllers/image.controller.js')
const isAuth = require('../middleware/authLogin')

    router.get('/id/:id', getPostById)
    router.get('/all', isAuth, getAllPost)
    router.get('/user', isAuth, getPostByUserId)
    router.post('/', isAuth, uploadMidleware.multer('image'), uploadMidleware.upload, createPost)
    router.put('/:id', isAuth, updateImage)
    router.delete('/:id', isAuth, deletePost)

module.exports = router;
