const express = require('express');
const router = express.Router();
const {
   createUser,findAll,findById,update,delet
} = require('../controllers/user.controller')
const {isAuth} = require('../middleware/authLogin')

/* GET users listing. */

router
    .get('/all', isAuth, findAll)
    .get('/user', isAuth, findById)
    .put('/', isAuth, update)
    .delete('/', isAuth, delet)

module.exports = router;

