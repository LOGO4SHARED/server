const jwt = require('jsonwebtoken');

module.exports = {
	isAuth (req, res, next) {
		try {
			const token = req.headers.token;
			let decoded = jwt.verify(token, process.env.SECRET);
			req.user.token = decoded;
			next();
			
		} catch (err) {
			res.status(401).json({
				message: 'Token is invalid',
				err
			})
		}
	}
};