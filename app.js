const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const httpErrorHandler = require('./middlewares/http_error_hanlder');
require('./services/mongodb_connection');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use(httpErrorHandler());

// error handler
process.on('uncaughtException', (err) => { logger.log('error', 'uncaught exception', { err }); });
process.on('unhandledRejection', (reason, promise) => { logger.log('error', 'unhandledRejection', { reason, promise }); });
module.exports = app;
