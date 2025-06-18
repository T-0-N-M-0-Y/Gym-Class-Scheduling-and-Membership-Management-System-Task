import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/user/userRoutes'
import { AuthRoutes } from './app/authentication/authRoutes'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', UserRoutes)
app.use('api/auth', AuthRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;
