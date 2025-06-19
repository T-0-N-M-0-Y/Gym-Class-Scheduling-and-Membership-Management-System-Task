import { Request, Response } from "express";
import { UserServices } from "./userService";

const createUser = async (req: Request, res: Response) => { //create user Operation
    try {
        const { user: userData } = req.body;
        const result = await UserServices.createUserIntoDB(userData);
        res.json({
            success: true,
            statusCode: 201,
            message: 'User is Created Successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            statusCode: 500,
            message: 'Something went Wrong',
            error: error,
        })
    }
}

const getAllUsers = async (req: Request, res: Response) => { //get all data from database Operation
    try {
        const result = await UserServices.getAllUsersFromDB();
        res.json({
            success: true,
            statusCode: 201,
            message: 'All Users collected Successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            statusCode: 500,
            message: 'Something went Wrong',
            error: error,
        })
    }
}

const getSingleUser = async (req: Request, res: Response) => { //get One data from database Operation
    try {
        const { userId } = req.params;
        const result = await UserServices.getOneUserFromDB(userId);
        res.json({
            success: true,
            statusCode: 201,
            message: 'User collected Successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            statusCode: 500,
            message: 'Something went Wrong',
            error: error,
        })
    }
}

export const UserControllers = {
    createUser,
    getAllUsers,
    getSingleUser
}