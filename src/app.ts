import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/user/userRoutes'
import { AuthRoutes } from './app/authentication/authRoutes'
import globalErrorHandler from './app/middleWares/errorMiddleware'
import { AdminRoutes } from './app/admin/adminRoute'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/users', UserRoutes)
app.use('/auth', AuthRoutes)
app.use('/admin', AdminRoutes);

app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;
