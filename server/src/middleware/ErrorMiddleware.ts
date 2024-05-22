import { ErrorRequestHandler } from "express";
import { CustomError, ErrorMessage, HttpStatusCode } from "../utils";
import { ZodError } from "zod";

export const ErrorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;

  if (error instanceof ZodError) {
    return res.status(statusCode).json({ message: error.flatten().fieldErrors });
  }

  if (error instanceof CustomError) {
    return res.status(statusCode).json({ message: error.message });
  }


  if(error.name === 'TokenExpiredError') {
    res.cookie("foodZone", "", {
      expires: new Date(0),
      httpOnly: true,
      secure: false,
      maxAge: 0
    })
    return res.status(HttpStatusCode.UNAUTHORIZED).json({message: error.message})
  }


  return res.status(statusCode).json({ message: ErrorMessage.DEFAULT_ERROR_MESSAGE });
};
