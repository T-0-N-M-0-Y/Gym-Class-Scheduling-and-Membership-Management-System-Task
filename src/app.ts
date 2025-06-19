import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { AuthRoutes } from './app/modules/authentication/authRoutes'
import globalErrorHandler from './app/middleWares/errorMiddleware'
import { AdminRoutes } from './app/modules/admin/adminRoute'
import { UserRoutes } from './app/modules/user/userRoutes'

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
