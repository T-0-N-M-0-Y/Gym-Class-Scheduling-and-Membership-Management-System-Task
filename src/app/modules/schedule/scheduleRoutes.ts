import express from 'express';
import { authenticate } from '../../middleWares/authMiddleware';
import { authorizeRoles } from '../../middleWares/roleMiddleware';
import { ScheduleController } from './scheduleController';

const router = express.Router();

router.post(
    '/create-schedules',
    authenticate,
    authorizeRoles('admin'),
    ScheduleController.createSchedule
);

router.get('/allSchedules', authenticate, ScheduleController.getAllSchedules);

export const ScheduleRoutes = router;
