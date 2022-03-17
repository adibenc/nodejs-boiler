// base
var express = require('express');
var router = express.Router();
var db = require('../database/dbcon');
var {rc, getController, resourceCrud} = require('./baseRoute');
const { Sequelize } = require('sequelize');

var {BaseResourceController} = require('../app/controllers/BaseResourceController');
var brController = new BaseResourceController()
var userController = getController('../app/controllers/UserController')
// var baseController = getController('../app/controllers/BaseController')

const User = require('../app/models/User');

const cl = console.log

/* GET home page. */
router.get('/', function(req, res, next) {
  baseController.baseJson(req, res, next, 200, "success")
});

resourceCrud(router, "user", userController)
router.get('/user/all', (req, res, next) => { userController.all(req, res, next) });

module.exports = router;
