import { NextFunction, Request, RequestHandler, Response } from "express";
import { registerServices } from "./register.services";
import { sendResponse } from "../../utility/sendResponse";
import httpsStatus from "http-status-codes";
import { catchAsync } from "../middleware/catchAsync";


const createTeacher = catchAsync(async (req: Request, res: Response) => {
  const result = await registerServices.createTeacherIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpsStatus.CREATED,
    success: true,
    message: "Teacher create Successfully",
    data: result,
  });
});
const createStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await registerServices.createStudentIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpsStatus.CREATED,
    success: true,
    message: "Student create Successfully",
    data: result,
  });
});

export const registerController = {
  createTeacher,
  createStudent
};
