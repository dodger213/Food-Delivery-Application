import { Router } from "express";
import * as auth from "../controllers/auth.controller";
import { ErrorMessage, SigninSchema, SignupSchema } from "../utils";
import { AuthMiddleware, RateLimiterMiddleware, ValidationMiddleware } from "../middleware";

export const AuthRoute = Router();

AuthRoute.post("/SignUp", 
RateLimiterMiddleware(ErrorMessage.RATE_LIMIT_ERROR, 2), 
ValidationMiddleware(SignupSchema), auth.SignUpUser);

AuthRoute.post("/SignIn", ValidationMiddleware(SigninSchema), auth.SignInUser);
AuthRoute.post("/SignOutUser", auth.SignOutUser);
AuthRoute.get("/verifyAuth", AuthMiddleware, auth.VerifyUser);
