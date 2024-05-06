import { AnyZodObject } from "zod";
import {Request, Response, NextFunction} from 'express'

export const ValidationMiddleware = (schema: AnyZodObject) => async(req:Request, res:Response, next:NextFunction) => {
    try {
        await schema.parseAsync({
            body :req.body
        })
        next()
    } catch (error) {
        next(error)
    }
}