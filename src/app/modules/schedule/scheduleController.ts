import { Request, Response } from 'express';
import { ScheduleService } from './scheduleService';

export const ScheduleController = {
  createSchedule: async (req: Request, res: Response) => {
    const result = await ScheduleService.createSchedule(req.body);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Schedule created successfully',
      data: result,
    });
  },

  getAllSchedules: async (req: Request, res: Response) => {
    const result = await ScheduleService.getAllSchedules();

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'All schedules retrieved successfully',
      data: result,
    });
  },
};
