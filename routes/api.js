// base
var express = require('express');
var router = express.Router();
var db = require('../database/dbcon');
var {BaseResourceController} = require('../app/controllers/BaseResourceController');
var brController = new BaseResourceController()
var {rc} = require('./baseRoute');
const User = require('../app/models/User');

const { Sequelize } = require('sequelize');

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
  // let data =  {v:1}
  
  let data =  {
    v:1,
    v2: process.env || 1
  }
  res.status(400).send({
    success: false,
    message: "Ok",
    data: data,
  });
});

router.get('/db-test', async function(req, res, next) {
  // let data =  {v:1}
  try{
    let data = await User.findAll() || {}
    // let data = await db.query('SELECT * FROM users') || {}
    data.user = User
  
    res.status(200).send({
      success: false,
      message: "Ok",
      data: data,
    });
  }catch(err){
    res.status(400).send(err)
  }
});

router.get('/r/all', (req, res, next) => { brController.all(req, res, next) });

module.exports = router;
