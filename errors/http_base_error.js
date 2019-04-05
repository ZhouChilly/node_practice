class HttpBaseError extends Error {
  constructor(httpStatusCode, httpMsg, errorCode, msg) {
    super(`HTTP ERROR: ${msg}`);
    this.httpStatusCode = httpStatusCode;
    this.httpMsg = httpMsg;
    this.errorCode = errorCode;
  }
}

module.exports = HttpBaseError;
