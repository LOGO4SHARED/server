const jwt = require('jsonwebtoken');

function isAuth(req, res, next){
	try {
		const token = req.headers.token;
		let decoded = jwt.verify(token, 'secret');
		req.user = decoded;
		next();
	} catch (err) {
		res.status(401).json({
			message: 'Token is invalid',
			err
		})
	}
}

module.exports = isAuth
