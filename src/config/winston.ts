import * as winston from 'winston';
import * as fs from 'fs';
import * as path from 'path';
// Uncomment the next line if you want daily rotation (install winston-daily-rotate-file first)
// import 'winston-daily-rotate-file';

// Ensure log directory exists
const logDir = path.resolve(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const isProduction = process.env.NODE_ENV === 'production';

// Console log format for development
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    return `${timestamp} [${level}] ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
  })
);

// File log format (JSON for easier aggregation)
const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

export const winstonConfig = {
  level: isProduction ? 'info' : 'debug',
  transports: [
    // Console transport for development
    new winston.transports.Console({
      format: consoleFormat,
      level: isProduction ? 'info' : 'debug',
    }),
    // Combined log file (JSON for production)
    new winston.transports.File({
      filename: path.join(logDir, 'combined.log'),
      level: 'info',
      format: fileFormat,
      maxsize: 5 * 1024 * 1024, // 5MB per file
      maxFiles: 5,
    }),
    // Error log file
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error',
      format: fileFormat,
      maxsize: 5 * 1024 * 1024, // 5MB per file
      maxFiles: 5,
    }),
    // Uncomment below for daily rotation (requires winston-daily-rotate-file)
    // new winston.transports.DailyRotateFile({
    //   filename: path.join(logDir, 'app-%DATE%.log'),
    //   datePattern: 'YYYY-MM-DD',
    //   zippedArchive: true,
    //   maxSize: '20m',
    //   maxFiles: '14d',
    //   format: fileFormat,
    // }),
  ],
  // Handle uncaught exceptions and unhandled rejections
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(logDir, 'exceptions.log'),
      format: fileFormat,
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.join(logDir, 'rejections.log'),
      format: fileFormat,
    }),
  ],
  exitOnError: false, // Do not exit on handled exceptions
};
