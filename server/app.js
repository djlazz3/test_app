var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config()

var dbProvider = require('./helpers/dbProvider')

var graffitiRouter = require('./routes/graffiti');
var imageRouter = require('./routes/image')
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(dbProvider)

app.use('/graffiti', graffitiRouter)
app.use('/image', imageRouter)
app.use('/users', usersRouter);

module.exports = app;
