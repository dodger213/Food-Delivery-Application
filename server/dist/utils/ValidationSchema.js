"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninSchema = exports.SignupSchema = void 0;
const zod_1 = require("zod");
exports.SignupSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email({ message: "Invalid email address" }),
        password: zod_1.z
            .string({ required_error: "Password is required" })
            .min(6, { message: "Password must be 6 or more characters long" })
            .max(16, { message: "password must be 16 or fewer characters long" }),
        firstname: zod_1.z
            .string({ required_error: 'firstname is required' })
            .min(4, { message: 'firstname must be 4 or more characters long' }),
        lastname: zod_1.z
            .string({ required_error: 'lastname is required' })
            .min(4, { message: 'lastname must be 4 or more characters long' }),
        mobile: zod_1.z
            .string({ required_error: "mobile number is required" })
            .min(10, { message: "mobile number must be 10 or more characters long" })
    }),
});
exports.SigninSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email({ message: "Invalid email address" }),
        password: zod_1.z
            .string({ required_error: "Password is required" })
            .min(6, { message: "Password must be 6 or more characters long" })
            .max(16, { message: "Password must be 16 or fewer characters long" }),
    }),
});
