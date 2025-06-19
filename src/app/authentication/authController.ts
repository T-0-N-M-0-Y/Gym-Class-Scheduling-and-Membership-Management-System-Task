import { Request, Response } from 'express';
import { AuthService } from './authService';

export const AuthController = {
  login: async (req: Request, res: Response) => {
    const result = await AuthService.loginUser(req.body);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      data: result,
    });
  },
};