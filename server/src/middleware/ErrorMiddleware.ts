import { ErrorRequestHandler } from "express";
import { CustomError, ErrorMessage } from "../utils";
import { ZodError } from "zod";

export const ErrorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;

  if (error instanceof ZodError) {
    return res.status(statusCode).json({ message: error.flatten().fieldErrors });
  }

  if (error instanceof CustomError) {
    return res.status(statusCode).json({ message: error.message });
  }

  console.log(error.message)
  return res.status(statusCode).json({ message: ErrorMessage.DEFAULT_ERROR_MESSAGE });
};
