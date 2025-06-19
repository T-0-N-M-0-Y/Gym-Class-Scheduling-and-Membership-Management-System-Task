import { Request, Response } from 'express';
import { ClassService } from './classService';

const createClass = async (req: Request, res: Response) => {
    const result = await ClassService.createClass(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: 'Class created successfully',
        data: result,
    });
}

const getAllClasses = async (req: Request, res: Response) => {
    const result = await ClassService.getAllClasses();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'All classes retrieved successfully',
        data: result,
    });
}
export const ClassController = {
    createClass,
    getAllClasses
};
