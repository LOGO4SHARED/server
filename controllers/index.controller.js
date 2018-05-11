
const jwt = require('jsonwebtoken');
const  User  = require('../models/user');

module.exports = {
	signUp (req, res) {
		const newUser = new User(req.body)
    newUser
      .save()
      .then(() => {
        res
          .status(200)
          .json({
            message: 'Register successfully',
            user: newUser
          })
      })
			.catch( err => {
				req.status(500).json({
					message: err.message
				})
			})
	},

	signIn (req, res) {
		User
			.findOne({
        email: req.body.email
			})
			.then( user => {
				let isLogin = false
				if(req.body.password === user.password){
					isLogin = true
				}
				if(isLogin){
					var token = jwt.sign(
						{
							id: user.id,
							email: user.email
						}, 'secret');
					if (token) {
						res.status(200).json({
							message: "Success Sign In",
							token: token
						});
					}
				} else {
					res.status(200).json({
						message: "Failed Sign In",
					});
				}
			})
			.catch( err => {
				res.status(500).json({
					message: err.message
				})
			})
	}
}
