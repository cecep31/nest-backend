import * as winston from 'winston';

const isProduction = process.env.NODE_ENV === 'production';

// Console log format
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    return `${timestamp} [${level}] ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
  })
);

export const winstonConfig = {
  level: isProduction ? 'info' : 'debug',
  transports: [
    new winston.transports.Console({
      format: consoleFormat,
      level: isProduction ? 'info' : 'debug',
    })
  ],
  exitOnError: false, // Do not exit on handled exceptions
};
