import { ApiError } from '../../apiError';
import { TSchedule, TSchedulePopulated } from './scheduleInterface';
import { ScheduleModel } from './scheduleModel';

const createSchedule = async (payload: TSchedule): Promise<TSchedule> => {
    const count = await ScheduleModel.countDocuments({ classDate: payload.classDate });

    if (count >= 5) {
        throw new ApiError(400, 'Daily schedule limit exceeded (max 5 per day).');
    }

    const newSchedule = await ScheduleModel.create(payload);
    return newSchedule;
};

const getAllSchedules = async (): Promise<TSchedulePopulated[]> => {
    const schedules = await ScheduleModel.find()
        .populate('classId', 'name','description')
        .populate('trainerId', 'name', 'email', 'role');

    return schedules as unknown as TSchedulePopulated[];
};

export const ScheduleService = {
    createSchedule,
    getAllSchedules,
};
