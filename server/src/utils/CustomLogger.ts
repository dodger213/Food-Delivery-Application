import winston from "winston";
import path from 'path'

const { combine, colorize, timestamp, align, printf, json } = winston.format;


winston.addColors({
  error: "red",
  warn: "yellow",
  info: "cyan",
  debug: "green",
});

export const CustomLogger = winston.createLogger({
  level: "http",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YY-MM-DD hh:mm A",
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(__dirname, "../logs/app-error.log"),
      level: "error"
    }),
  ],
});
