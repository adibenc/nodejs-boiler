var {rc, getController, resourceCrud} = require('./baseRoute');
var baseController = getController('../app/controllers/BaseController')

require('dotenv').config()
const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	
	console.log([req.headers, authHeader, token, "verify"])

	if (token == null) return res.sendStatus(401)

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		console.log([err, user, "verify"])
		// if (err) return res.sendStatus(403)
		if (err) return baseController.forbidden(req, res, next, err.message)
		req.user = user
		next()
	})
}

module.exports = {
	authenticateToken
};