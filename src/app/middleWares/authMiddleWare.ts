import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export interface AuthRequest extends Request {
    user?: {
        _id: string;
        role: string;
    };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.json({
                success: false,
                status: 401,
                message: 'Unauthorized access',
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, config.secret_key!);

        req.user = decoded as { _id: string; role: string };
        next();
        
    } catch (error) {
        res.json({
            success: false,
            status: 401,
            message: 'Invalid token.',
            error: error
        });
    }
};
