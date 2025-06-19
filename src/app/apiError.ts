export class ApiError extends Error {
  statusCode: number;
  errorDetails?: any;

  constructor(statusCode: number, message: string, errorDetails?: any) {
    super(message);
    this.statusCode = statusCode;
    this.errorDetails = errorDetails;

    // Maintain proper stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}
