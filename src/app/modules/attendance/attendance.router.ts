import { Router } from "express";
import { attendanceController } from "./attendance.controller";

const router = Router()


router.post('/create-attendance', attendanceController.attendanceIn)
router.get('/', attendanceController.getAttendance)


export const attendanceRouter = router