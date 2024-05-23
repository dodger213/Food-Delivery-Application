import {Router} from 'express'
import { AuthMiddleware } from '../middleware'
import { CreatePaymentIntent } from '../controllers/payment.controller'


export const PaymentRoute = Router()


PaymentRoute.post('/create-payment-intent', AuthMiddleware, CreatePaymentIntent)