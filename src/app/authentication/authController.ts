import { Request, Response } from 'express';
import { AuthService } from './authService';

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await AuthService.loginUser(email, password);
        res.json({
            success: true,
            statusCode: 201,
            message: 'User Logged in Successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            statusCode: 500,
            message: "Validation error occurred.",
            error: error,
        })
    }
};

export const AuthController = {
    login,
};