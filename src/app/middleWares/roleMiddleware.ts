import { NextFunction, Response } from "express";
import { CustomRequest } from "./authMiddleware";

export const authorizeRoles = (...roles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized access',
        errorDetails: 'You do not have permission to perform this action.',
      });
    }
    next();
  };
};