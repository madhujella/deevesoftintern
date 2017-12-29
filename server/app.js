var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var signup = require('./routes/signup');
var signin = require('./routes/signin');
var admin = require('./routes/admin');
var coach = require('./routes/coach');
var member = require('./routes/member');
var explore = require('./routes/explore');
var createClass = require('./routes/class');
var schedule = require('./routes/schedule');

var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/signup', signup);
app.use('/signin', signin);
app.use('/admin', admin);
app.use('/coach', coach);
app.use('/member', member);
app.use('/explore', explore);
app.use('/class', createClass);
app.use('/schedule', schedule);

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
