import {  Types } from "mongoose";

export type TSchedule = {
    classId: Types.ObjectId;
    trainerId: Types.ObjectId;
    classDate: string;
    startTime: string;
    endTime: string;
};
