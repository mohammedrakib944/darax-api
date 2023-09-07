import { Response } from "express";
const success = (
  res: Response,
  statusCode: number = 200,
  message: string = "Success!"
) => {
  return res.status(statusCode).json({
    success: true,
    message,
  });
};
export default success;
