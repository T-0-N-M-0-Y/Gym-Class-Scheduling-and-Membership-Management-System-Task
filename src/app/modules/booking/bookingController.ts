import { Response } from 'express';
import { CustomRequest } from '../../middleWares/authMiddleware';
import { BookingService } from './bookingService';

export const BookingController = {
  createBooking: async (req: CustomRequest, res: Response) => {
    const result = await BookingService.createBooking(req.user._id, req.body.scheduleId);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Class booked successfully',
      data: result,
    });
  },

  getMyBookings: async (req: CustomRequest, res: Response) => {
    const result = await BookingService.getMyBookings(req.user._id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Your bookings fetched successfully',
      data: result,
    });
  },

  cancelBooking: async (req: CustomRequest, res: Response) => {
    const result = await BookingService.cancelBooking(req.user._id, req.params.id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Booking cancelled successfully',
      data: result,
    });
  },
};
