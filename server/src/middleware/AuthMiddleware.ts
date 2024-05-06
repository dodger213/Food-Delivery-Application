import jwt, { JwtPayload } from 'jsonwebtoken'
import { Response, Request, NextFunction } from "express";
import { ErrorMessage, HttpStatusCode } from "../utils";


export const AuthMiddleware = async(req: Request, res: Response, next:NextFunction) => {
    const token = req.cookies['foodZone']


    if(!token) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json({message: ErrorMessage.NOT_AUTHORIZED})
    }

    const decodeToken = await jwt.verify(token, process.env.SECRET_KEY as string)

    if(!decodeToken) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json({message: ErrorMessage.NOT_AUTHORIZED})
    }

    req.userId = (decodeToken as JwtPayload).userId
    next()
}