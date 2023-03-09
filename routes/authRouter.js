require('dotenv').config()

var express = require('express');
var router = express.Router();
const app = express()
const jwt = require('jsonwebtoken')

// app.use(express.json())

let refreshTokens = []

router.post('/auth/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
})

router.delete('/auth/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

router.post('/auth/login', (req, res) => {
	// Authenticate User

	const username = req.body.username
	const user = { name: username }

	const accessToken = generateAccessToken(user)
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
	refreshTokens.push(refreshToken)
	res.json({ 
		access_token: accessToken, 
		refresh_token: refreshToken 
	})
})

function generateAccessToken(user) {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, 
		// { expiresIn: '15s' }
		{ expiresIn: '365d' }
	)
}

module.exports = router;
// app.listen(4000)