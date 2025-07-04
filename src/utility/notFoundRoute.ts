import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";

export const notFoundRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    error: {
      path: req.originalUrl,
    },
  });
};
