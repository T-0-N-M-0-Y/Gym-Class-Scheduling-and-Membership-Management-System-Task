import { Types } from "mongoose";

export type TBooking = {
  traineeId: Types.ObjectId;
  scheduleId: Types.ObjectId;
};
