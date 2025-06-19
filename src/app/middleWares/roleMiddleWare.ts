import { Response, NextFunction } from 'express';
import { AuthRequest } from './authMiddleWare';

export const authorizeRoles =
    (...roles: string[]) =>
        (req: AuthRequest, res: Response, next: NextFunction) => {
            if (!req.user || !roles.includes(req.user.role)) {
                return res.json({
                    success: false,
                    status: 403,
                    message: 'Unauthorized access.',
                    errorDetails: `You must be one of: ${roles.join(', ')} to perform this action`,
                });
            }
            next();
        };
