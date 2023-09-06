import { Request, Response, NextFunction } from "express";

// Define a custom error class for better error handling
class AppError extends Error {
  constructor(public statusCode: number = 500, public message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

// Error handler middleware function
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    // If it's a known AppError, respond with the specified status code and message
    res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  } else if (typeof err === "string") {
    // If a custom error message string is passed with `next()`, treat it as a 500 error
    res.status(500).json({
      status: "error",
      message: err,
    });
  } else {
    // If it's an unknown error, respond with a generic 500 Internal Server Error
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
