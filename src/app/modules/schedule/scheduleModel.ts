import { Schema, model } from 'mongoose';
import { TSchedule } from './scheduleInterface';

const scheduleSchema = new Schema<TSchedule>(
    {
        classId: {
            type: Schema.Types.ObjectId,
            ref: 'Class',
            required: true,
        },
        trainerId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        classDate: {
            type: String,
            required: true,
        },
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const ScheduleModel = model<TSchedule>('Schedule', scheduleSchema);
