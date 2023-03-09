var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// res.send({msg: "Ok"})
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.send("test")
});

module.exports = router;
