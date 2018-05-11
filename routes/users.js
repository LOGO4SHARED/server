const express = require('express');
const router = express.Router();
const {createUser, findAll, findById, update, deletes } = require('../controllers/user.controller')
const isAuth = require('../middleware/authLogin')


/* GET users listing. */
router
    .post('/created', isAuth,createUser)
    .get('/all', isAuth, findAll)
    .get('/user', isAuth, findById)
    .put('/', isAuth, update)
    .delete('/', isAuth, deletes)

module.exports = router;
