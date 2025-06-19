import { Document, Types } from "mongoose";
import { TClass } from "../class/classInterface";
import { TUser } from "../user/userInterface";

export type TSchedule = {
    classId: Types.ObjectId;
    trainerId: Types.ObjectId;
    classDate: string;
    startTime: string;
    endTime: string;
};

export type TSchedulePopulated = Document & {
    classId: TClass;
    trainerId: TUser;
    classDate: string;
    startTime: string;
    endTime: string;
};
