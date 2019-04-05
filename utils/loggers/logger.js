const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const { combine, timestamp, json } = format;

const logger = createLogger({
  format: combine(
    timestamp(),
    json(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: 'logs/%DATE%_info.log',
      FdatePattern: 'YYYY_MM_DD',
      prepend: true,
      level: 'info',
    }),
    new DailyRotateFile({
      filename: 'logs/%DATE%_error.log',
      FdatePattern: 'YYYY_MM_DD',
      prepend: true,
      level: 'error',
    }),
  ],
});

module.exports = logger;
