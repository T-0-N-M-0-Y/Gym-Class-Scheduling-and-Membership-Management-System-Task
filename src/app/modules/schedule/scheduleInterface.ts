import { Types } from "mongoose";

export type TSchedule = {
  _id?: string;
  classId: Types.ObjectId;
  trainerId: Types.ObjectId;
  classDate: string;
  startTime: string;
  endTime: string;
};
