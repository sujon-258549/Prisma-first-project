import { Request, Response } from "express";
import { catchAsync } from "../../middleware/catchAsync";
import { studentServices } from "./student.servoces";
import { sendResponse } from "../../utility/sendResponse";

import HttpStatus from "http-status";

const pickFunction = (obj : any, keys : string[]) : any => {
    const finalObject: Record<string, any> = {};

    for (const key of keys) {
        if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
            finalObject[key] = obj[key];
        }
    }
  return finalObject
};

const getStudent = catchAsync(async (req: Request, res: Response) => {

    const queryParams = pickFunction(req.query, ['searchTerm', "email"])
    const result = await studentServices.studentIntoDB(queryParams)
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Get Department Student",
        data: result
    })
})


export const studentController = { getStudent }