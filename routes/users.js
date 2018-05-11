const express = require('express');
const router = express.Router();
const {createUser, findAll, findById, update, delete } = require('../controllers/user.controller')
const {isAuth} = require('../middleware/authLogin')

/* GET users listing. */
router
    .get('/all', auth, getAllUser)
    .get('/user', auth, getOneUser)
    .put('/', isAuth, updateUser)
    .delete('/', isAuth, deleteUser)

module.exports = router;
