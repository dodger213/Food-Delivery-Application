"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTokenAndCookie = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const GenerateTokenAndCookie = (userId, res) => {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: "1h",
    });
    res.cookie("foodZone", token, {
        maxAge: 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true
    });
};
exports.GenerateTokenAndCookie = GenerateTokenAndCookie;
