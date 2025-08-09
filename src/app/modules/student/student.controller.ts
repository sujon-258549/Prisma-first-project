import { Request, Response } from "express";
import { catchAsync } from "../../middleware/catchAsync";
import { studentServices } from "./student.servoces";
import { sendResponse } from "../../utility/sendResponse";

import HttpStatus from "http-status";
const getStudent = catchAsync(async (req: Request, res: Response) => {
    const result = await studentServices.studentIntoDB()
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Get Department Student",
        data: result
    })
})


export const studentController = { getStudent }