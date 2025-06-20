import { ApiError } from "../../apiError";
import { TBooking } from "./bookingInterface";
import { BookingModel } from "./bookingModel";


const createBooking = async (userId: string, scheduleId: string): Promise<TBooking> => {
    const exists = await BookingModel.findOne({
        traineeId: userId,
        scheduleId: scheduleId,
    });
    if (exists) {
        throw new ApiError(400, 'You have already booked this schedule.');
    }
    const count = await BookingModel.countDocuments({ scheduleId });
    if (count >= 10) {
        throw new ApiError(400, 'Class schedule is full. Maximum 10 trainees allowed per schedule.');
    }
    return await BookingModel.create({
        traineeId: userId,
        scheduleId: scheduleId
    });
}

const getMyBookings = async (userId: string): Promise<TBooking[]> => {
    return await BookingModel.find({ traineeId: userId }).populate({
        path: 'scheduleId',
        populate: ['classId', 'trainerId'],
    });
}

const cancelBooking = async (userId: string, bookingId: string) => {
    const booking = await BookingModel.findOne({ _id: bookingId, traineeId: userId });
    if (!booking) {
        throw new ApiError(404, 'Booking not found or you are not authorized to cancel this booking.');
    }
    await BookingModel.findByIdAndDelete(bookingId);
    return booking;
}

export const BookingService = {
    createBooking,
    getMyBookings,
    cancelBooking
};
