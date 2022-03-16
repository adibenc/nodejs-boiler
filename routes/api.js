// base
var express = require('express');
var router = express.Router();
var db = require('../database/dbcon');
var {rc, getController} = require('./baseRoute');
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

router.get('/user/all', (req, res, next) => { userController.all(req, res, next) });
router.get('/user/:id', (req, res, next) => { userController.single(req, res, next) });
router.post('/user/', (req, res, next) => { userController.create(req, res, next) });
router.put('/user/:id', (req, res, next) => { userController.update(req, res, next) });
router.delete('/user/:id', (req, res, next) => { userController.delete(req, res, next) });

module.exports = router;
