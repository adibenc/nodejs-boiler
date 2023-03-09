const https = require('https');
const fs = require('fs');
const path = require('path');

const createError = require('http-errors');
const dotenv = require('dotenv').config()
require('express-group-routes');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const pug = require('pug');

// reqs
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

var middleware = require("./routes/middlewares")

var webRouter = require('./routes/web');
var apiRouter = require('./routes/api');
var authRouter = require('./routes/authRouter');

const { cl } = require('./util/util');
// const { passportRoutes } = require('./app/oauth/auth');

var app = express();

const port = process.env.PORT || 8000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }) ) // for parsing application/x-www-form-urlencoded

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set passport routes
// const {setupPassport} = require('./app/oauth/bundle');
// setupPassport(app)

// web & api routes
app.use('/', webRouter);
app.use('/api', middleware.authenticateToken, apiRouter);
app.use('/', authRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const options = {
//   key  : fs.readFileSync(path.join(__dirname, 'app/oauth/certs/privatekey.pem')),
//   cert : fs.readFileSync(path.join(__dirname, 'app/oauth/certs/certificate.pem')),
};

// Create our HTTPS server listening on port 8000.
// https.createServer(options, app).listen(port)
console.log(`Example app listening on port ${port}`)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
