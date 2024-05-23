
import Stripe from "stripe";
import {Request, Response} from 'express'
import { AsyncWrapper } from "../utils";
import { CartModel } from "../models";


const stripe = new Stripe(process.env.STRIPE_API_KEY as string)



export const CreatePaymentIntent = AsyncWrapper(async(req:Request, res:Response) => {
    const {amount} = req.body;
   

    const paymentIntent = await stripe.paymentIntents.create({
        description: "foodZone app",
        amount: amount,
        currency: 'inr',
        payment_method_types: ['card']
    })

    if(paymentIntent) {
        await CartModel.findOneAndDelete({orderBy: req.userId})

    }

    res.send({
        clientSecret: paymentIntent.client_secret
    })
})