var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');

var studentRouter = require('./routes/students');
var userRouter = require('./routes/users');
var excelRouter = require('./routes/excel');
var uploadRouter = require('./routes/upload');
var ratingRouter = require('./routes/rating');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users',userRouter);
app.use(function(req, res, next){
  if(req.originalUrl != '/users/check'){
    //获得token
    let token = req.body.token;
    if(token){
      jwt.verify(token, 'secret', function(err, decoded){
        if(err){
          return res.status(401).send({code: 0, msg: '无效的token'});
        }else{
          return next();
        }
      });
    }else{
      //没有拿到token
      return res.status(401).send({code:0, msg: '没有拿到token'});
    }
  }else{
    return next;
  }
});
app.use('/', studentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
