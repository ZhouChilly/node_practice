const HttpBaseError = require('../errors/http_base_error');
const logger = require('../utils/loggers/logger');

const handler = options => (err, req, res, next) => {
  if (err instanceof HttpBaseError) {
    const errMeta = {
      url: req.originalUrl,
      query: req.query,
      userInfo: req.user,
    };
    logger.log('error', err.message, errMeta);
    res.httpStatusCode = err.httpStatusCode;
    res.json({
      code: err.errorCode,
      msg: err.httpMsg,
    });
  } else {
    next(err);
  }
};

module.exports = handler;
