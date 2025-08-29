import { Request, Response } from "express";
import { catchAsync } from "../../middleware/catchAsync";
import { studentServices } from "./student.servoces";
import { sendResponse } from "../../utility/sendResponse";

import HttpStatus from "http-status";
import { pickFunction } from "../utils/pick";



const getStudent = catchAsync(async (req: Request, res: Response) => {

    // const search = 
    const queryParams = pickFunction(req?.query, ['searchTerm', "email", "name"])
    const options = pickFunction(req.query, ["limit", "page", "sortBy", "sortOrder"])

    const result = await studentServices.studentIntoDB(queryParams, options)
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Get Department Student",
        data: result
    })
})


export const studentController = { getStudent }