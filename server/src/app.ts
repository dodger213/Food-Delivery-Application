import express, {Application} from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import ExpressMongoSanitize from 'express-mongo-sanitize'
import morgan from 'morgan'

import { AuthRoute } from './routes'
import { ErrorMiddleware, RouteNotFoundMiddleware } from './middleware'


export const app: Application = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin: process.env.ORIGIN || 'http://localhost:5173',
    credentials: true,
}))

app.use(cookieParser())
app.use(helmet())
app.use(ExpressMongoSanitize())
app.disable('x-powered-by')


 
app.use('/api/auth', AuthRoute)

app.use(RouteNotFoundMiddleware)
app.use(ErrorMiddleware)

