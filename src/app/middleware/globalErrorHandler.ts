import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: err.name,
      err: err,
    });
  } catch (error) {
    next(error);
  }
};
