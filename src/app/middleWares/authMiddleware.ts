import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export interface CustomRequest extends Request {
  user?: any;
}

export const authenticate = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      success: false,
      statusCode: 401,
      message: 'Unauthorized access',
      errorDetails: 'No token provided',
    });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.secret_key as string);
    req.user = decoded;
    next(); // ✅ pass to next middleware
  } catch (error) {
    res.status(403).json({
      success: false,
      statusCode: 403,
      message: 'Unauthorized access',
      errorDetails: 'Invalid token',
      error,
    });
  }
};
