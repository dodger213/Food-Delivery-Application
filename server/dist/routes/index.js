"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoute = exports.AdminRoute = exports.CartRoute = exports.FoodRoute = exports.AuthRoute = void 0;
var auth_route_1 = require("./auth.route");
Object.defineProperty(exports, "AuthRoute", { enumerable: true, get: function () { return auth_route_1.AuthRoute; } });
var food_route_1 = require("./food.route");
Object.defineProperty(exports, "FoodRoute", { enumerable: true, get: function () { return food_route_1.FoodRoute; } });
var cart_route_1 = require("./cart.route");
Object.defineProperty(exports, "CartRoute", { enumerable: true, get: function () { return cart_route_1.CartRoute; } });
var admin_route_1 = require("./admin.route");
Object.defineProperty(exports, "AdminRoute", { enumerable: true, get: function () { return admin_route_1.AdminRoute; } });
var payment_route_1 = require("./payment.route");
Object.defineProperty(exports, "PaymentRoute", { enumerable: true, get: function () { return payment_route_1.PaymentRoute; } });
