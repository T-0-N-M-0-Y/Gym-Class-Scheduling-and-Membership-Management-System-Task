import { NextFunction, Request, Response } from 'express';
import config from '../config';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || 'Something went wrong',
    errorDetails: error.errorDetails || null,
    stack: config.node_env === 'development' ? error.stack : undefined,
  });
};

export default globalErrorHandler;
