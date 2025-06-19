import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/user/userRoutes'
import { AuthRoutes } from './app/authentication/authRoutes'
import globalErrorHandler from './app/middleWares/errorMiddleware'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/users', UserRoutes)
app.use('/auth', AuthRoutes)

app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;
