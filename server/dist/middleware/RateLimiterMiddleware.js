"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiterMiddleware = void 0;
const express_rate_limit_1 = require("express-rate-limit");
const RateLimiterMiddleware = (message, limits) => {
    return (0, express_rate_limit_1.rateLimit)({
        windowMs: 5 * 60 * 1000,
        limit: limits,
        standardHeaders: 'draft-7',
        legacyHeaders: false,
        message: `${message}`
    });
};
exports.RateLimiterMiddleware = RateLimiterMiddleware;
