import { NextFunction, Response, Request } from "express";
import { ErrorMessage, HttpStatusCode } from "../utils";


export const RouteNotFoundMiddleware = (req:Request, res:Response, next:NextFunction) => {
    res.status(HttpStatusCode.NOT_FOUND).json({message: ErrorMessage.ROUTE_NOT_FOUND})
}

