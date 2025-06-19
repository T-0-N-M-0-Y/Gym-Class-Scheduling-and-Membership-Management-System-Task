import express from 'express';
import { authenticate } from '../../middleWares/authMiddleware';
import { authorizeRoles } from '../../middleWares/roleMiddleware';
import { BookingController } from './bookingController';

const router = express.Router();

// ✅ Trainee-only actions
router.post(
  '/create-booking',
  authenticate,
  authorizeRoles('trainee'),
  BookingController.createBooking
);

router.get(
  '/my-bookings',
  authenticate,
  authorizeRoles('trainee'),
  BookingController.getMyBookings
);

router.delete(
  '/cancel/:id',
  authenticate,
  authorizeRoles('trainee'),
  BookingController.cancelBooking
);

export const BookingRoutes = router;
