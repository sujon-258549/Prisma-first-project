import { NextFunction, Request, RequestHandler, Response } from "express";
import { registerServices } from "./register.services";
import { sendResponse } from "../../utility/sendResponse";
import httpsStatus from "http-status-codes";
const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

const createTeacher = catchAsync(async (req: Request, res: Response) => {
  const result = await registerServices.createTeacherIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpsStatus.CREATED,
    success: true,
    message: "Teacher create Successfully",
    data: result,
  });
});

export const registerController = {
  createTeacher,
};
