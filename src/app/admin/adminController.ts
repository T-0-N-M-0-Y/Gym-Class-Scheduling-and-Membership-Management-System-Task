import { Request, Response } from 'express';
import { AdminService } from './adminService';

const updateUserRole = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const result = await AdminService.updateUserRole(userId, req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'User role updated successfully',
        data: result,
    });
}
export const AdminController = {
    updateUserRole
};
