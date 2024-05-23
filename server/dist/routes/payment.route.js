"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoute = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const payment_controller_1 = require("../controllers/payment.controller");
exports.PaymentRoute = (0, express_1.Router)();
exports.PaymentRoute.post('/create-payment-intent', middleware_1.AuthMiddleware, payment_controller_1.CreatePaymentIntent);
