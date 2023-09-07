import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

type errorType = {
  msg: string;
};

// input validation Result
const validationOutput = (req: Request, res: Response, next: NextFunction) => {
  const errors: any = validationResult(req);
  if (!errors.isEmpty()) {
    const errorArray = errors.errors.map((err: errorType) => err.msg);
    const errorMsgString = errorArray.join(", ");
    next(errorMsgString);
  }
  next();
};

export default validationOutput;
