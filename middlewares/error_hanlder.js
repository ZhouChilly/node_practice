const logger = require('../utils/loggers/logger');

const handler = options => (err, req, res, next) => {
  logger.log('error', 'uncaught error in the middleware process', { err });
};

module.exports = handler;
