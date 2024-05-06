"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.SuccessMessage = exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
})(HttpStatusCode || (exports.HttpStatusCode = HttpStatusCode = {}));
exports.SuccessMessage = {
    USER_REGISTER_SUCCESS: 'Registration Success',
    USER_LOGIN_SUCCESS: "Login Success",
};
exports.ErrorMessage = {
    DEFAULT_ERROR_MESSAGE: "Something went wrong",
    ROUTE_NOT_FOUND: "Route not found",
    USER_ALREADY_EXIST: "Email already exists",
    USER_NOT_FOUND: "Invalid Email or Password",
    INVALID_PASSWORD: "Invalid Email or Password",
    INVALID_EMAIL: "Invalid email",
    NOT_AUTHORIZED: "You are not authorized to access this route",
    INVALID_CREDENTIALS: "Invalid credentials",
    RATE_LIMIT_ERROR: 'You have already tried registering twice. Please wait for a while'
};
