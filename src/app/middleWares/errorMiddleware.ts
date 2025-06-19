import { Request, Response } from 'express';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || 'Something went wrong',
    errorDetails: error.errorDetails || null,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  });
};

export default globalErrorHandler;
