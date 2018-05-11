const User  = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
	signUp (req, res) {
		console.log(req.body)
		const newUser = new User(req.body)
		let salt = bcrypt.genSaltSync()

		bcrypt.hash(req.body.password, salt, (err, hashPass) => {
			if (err) {
				console.log(err)
			} else {
				User
					.create({
						name: req.body.name,
						password: hashPass,
						email: req.body.email,
					})
					.then((user) => {
						res
							.status(200)
							.json({
								message: 'Register successfully',
								user
							})
					})
					.catch(err => {
						req.status(500).json({
							message: err.message
						})
					})
			}
		})
	},

	signIn (req, res) {
		User
			.findOne({
        email: req.body.email
			})
			.then( user => {
				let isLogin = bcrypt.compareSync(req.body.password, user.password)
				
				if(isLogin==true){
					
					var token = jwt.sign(
						{
							name: user.name,
							email: user.email
						}, 'password4SHAREDLOGO');
					console.log(token)				
						let name = user.name
						
					if (token) {
						res.status(200).json({
							message: "Success Sign In",
							token: token,
							name
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
