import { Types } from "mongoose";


export type TBooking = {
  scheduleId: Types.ObjectId;
  traineeId: Types.ObjectId;
};
