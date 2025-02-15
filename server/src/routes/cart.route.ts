import { Router } from 'express'
import * as cart from '../controllers/cart.controller'
import { AuthMiddleware } from '../middleware'

export const CartRoute = Router()

CartRoute.get('/user-cart', AuthMiddleware, cart.GetAllCartItems)
CartRoute.post('/add-cart', AuthMiddleware, cart.CreateUserCart)
CartRoute.delete('/remove-cart/:productId', AuthMiddleware, cart.RemoveFromCart)
CartRoute.put('/update-cart/:productId', AuthMiddleware, cart.UpdateCartItem)
