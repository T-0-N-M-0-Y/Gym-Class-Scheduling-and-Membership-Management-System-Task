import { ApiError } from "../../apiError";
import { TSchedule } from "./scheduleInterface";
import { ScheduleModel } from "./scheduleModel";

const createSchedule = async (payload: TSchedule): Promise<TSchedule> => {
    const sameDaySchedules = await ScheduleModel.countDocuments({
        classDate: payload.classDate,
    });
    if (sameDaySchedules >= 5) {
        throw new ApiError(400, 'Daily schedule limit exceeded (max 5 per day).');
    }
    const newSchedule = await ScheduleModel.create(payload);
    return newSchedule;
}

const getAllSchedules = async (): Promise<TSchedule[]> => {
    return await ScheduleModel.find()
        .populate('classId')
        .populate('trainerId');
}

export const ScheduleService = {
    createSchedule,
    getAllSchedules
};
