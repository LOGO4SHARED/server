const { User } = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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
            usero: newUser
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
				let isLogin = bcrypt.compareSync(req.body.password, user.password)
				if(isLogin){
					var token = jwt.sign(
						{
							id: user.id,
							email: user.email
						}, process.env.SECRET);
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
