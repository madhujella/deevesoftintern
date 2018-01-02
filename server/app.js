var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

// var index = require('./routes/index');
var auth = require('./routes/auth');
var admin = require('./routes/admin');
var coach = require('./routes/coach');
var member = require('./routes/member');
var createClass = require('./routes/class');
var schedule = require('./routes/schedule');

var authVerify = require('./helpers');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// app.use('/', index);
app.use('/auth', auth);
app.use('/admin',authVerify.isLogin, admin);
app.use('/coach',authVerify.isLogin, coach);
app.use('/member',authVerify.isLogin, member);
app.use('/class',authVerify.isLogin, createClass);
app.use('/schedule',authVerify.isLogin, schedule);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

module.exports = app;
