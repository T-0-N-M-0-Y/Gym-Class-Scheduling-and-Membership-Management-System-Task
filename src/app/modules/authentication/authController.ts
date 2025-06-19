import { Request, Response } from 'express';
import { AuthService } from './authService';


const login = async (req: Request, res: Response) => {
    const result = await AuthService.loginUser(req.body);
    res.json({
        success: true,
        statusCode: 200,
        message: 'User logged in successfully',
        data: result,
    });
}

export const AuthController = {
    login
};