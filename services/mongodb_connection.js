const mongoose = require('mongoose');
const logger = require('../utils/loggers/logger');

mongoose.Promise = Promise;
const uri = 'mongodb://localhost:27017/node_practice';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;

db.on('open', () => {
  logger.log('info', 'db connected');
});
db.on('error', (err) => {
  logger.log('error', 'db connect error', { err: err.stack });
});

module.exports = db;
