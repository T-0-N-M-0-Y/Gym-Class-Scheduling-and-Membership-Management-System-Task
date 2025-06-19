import { NextFunction, Response } from 'express';
import { CustomRequest } from './authMiddleware';

export const authorizeRoles = (...roles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction): void => {
    const userRole = req.user?.role;

    if (!userRole || !roles.includes(userRole)) {
      res.status(403).json({
        success: false,
        message: 'Unauthorized access',
        errorDetails: 'You do not have permission to perform this action.',
      });
      return;
    }

    next();
  };
};
