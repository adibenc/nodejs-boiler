// base
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    success: true,
    message: "Ok",
    data: {v:1},
  });
});

router.get('/test', function(req, res, next) {
  res.send("test")
});

module.exports = router;
