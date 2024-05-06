"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const { combine, colorize, timestamp, align, printf, json } = winston_1.default.format;
winston_1.default.addColors({
    error: "red",
    warn: "yellow",
    info: "cyan",
    debug: "green",
});
exports.CustomLogger = winston_1.default.createLogger({
    level: "http",
    format: combine(colorize({ all: true }), timestamp({
        format: "YY-MM-DD hh:mm A",
    }), align(), printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            filename: path_1.default.join(__dirname, "../logs/app-error.log"),
            level: "error"
        }),
    ],
});
