"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const EnvVariables = zod_1.z.object({
    PORT: zod_1.z.string().min(1).max(4),
    MONGO_URI: zod_1.z.string().min(1),
    SECRET_KEY: zod_1.z.string().min(10).max(20),
    ORIGIN: zod_1.z.string().min(1),
});
