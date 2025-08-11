import { Request, Response } from "express";
import { catchAsync } from "../../middleware/catchAsync";
import { sendResponse } from "../../utility/sendResponse";
import { attendancesServices } from "./attendance.services";
import httpsStatus from "http-status"
const attendanceIn = catchAsync(async (req: Request, res: Response) => {
    const result = await attendancesServices.attendanceServicesIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpsStatus.CREATED,
        success: true,
        message: "Attendance create Successfully",
        data: result,
    });
});
const getAttendance = catchAsync(async (req: Request, res: Response) => {
    const result = await attendancesServices.getAttendance();
    sendResponse(res, {
        statusCode: httpsStatus.OK,
        success: true,
        message: "Attendance retrieved Successfully",
        data: result,
    });
});

export const attendanceController = { attendanceIn , getAttendance}