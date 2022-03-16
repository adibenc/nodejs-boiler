// base
var express = require('express');
var router = express.Router();
var {BaseResourceController} = require('../app/controllers/BaseResourceController');
var brController = new BaseResourceController()
var {rc} = require('./baseRoute');

const cl = console.log

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    success: true,
    message: "Ok",
    data: {v:1},
  });
});

router.get('/test', async function(req, res, next) {
  res.status(400).send({
    success: false,
    message: "Ok",
    data: {v:1},
  });
});

router.get('/r/all', (req, res, next) => { brController.all(req, res, next) });

module.exports = router;
