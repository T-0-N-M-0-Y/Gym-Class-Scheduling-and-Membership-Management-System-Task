import { Schema, model } from 'mongoose';
import { TBooking } from './bookingInterface';

const bookingSchema = new Schema<TBooking>(
  {
    traineeId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    scheduleId: {
      type: Schema.Types.ObjectId,
      ref: 'Schedule',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BookingModel = model<TBooking>('Booking', bookingSchema);
