import jwt, { JwtPayload } from 'jsonwebtoken'
import { Response, Request, NextFunction } from "express";
import { AsyncWrapper, ErrorMessage, HttpStatusCode } from "../utils";
import { UserModelType } from '../types.def';
import { UserModel } from '../models';


export const AuthMiddleware = AsyncWrapper(async(req: Request, res: Response, next:NextFunction) => {
    const token = req.cookies['foodZone']


    if(!token) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json({message: ErrorMessage.NOT_AUTHORIZED})
    }

    const decodeToken = await jwt.verify(token, process.env.SECRET_KEY)

    if(!decodeToken) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json({message: ErrorMessage.NOT_AUTHORIZED})
    }

    req.userId = (decodeToken as JwtPayload).userId
    next()
})

export const AdminMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const findAdmin: UserModelType | null = await UserModel.findById(req.userId)
        if(findAdmin?.role !== 'admin') {
            return res.status(401).json({message: "Unauthorized"})
        }
        next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}