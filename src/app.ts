import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { AuthRoutes } from './app/modules/authentication/authRoutes'
import globalErrorHandler from './app/middleWares/errorMiddleware'
import { AdminRoutes } from './app/modules/admin/adminRoute'
import { UserRoutes } from './app/modules/user/userRoutes'
import { ClassRoutes } from './app/modules/class/classRoutes'
import { ScheduleRoutes } from './app/modules/schedule/scheduleRoutes'
import { BookingRoutes } from './app/modules/booking/bookingRoutes'

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/users', UserRoutes);
app.use('/auth', AuthRoutes);
app.use('/admin', AdminRoutes);
app.use('/classes', ClassRoutes);
app.use('/schedules', ScheduleRoutes);
app.use('/booking', BookingRoutes);

app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;
