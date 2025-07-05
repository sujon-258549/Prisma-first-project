import { Router } from "express";
import { registerController } from "./register.controller";
import validation from "../middleware/validation";
import { diplomaStudentZodSchema, diplomaTeacherZodSchema } from "./zod.validation";

const router = Router();
router.post("/create-teacher", validation(diplomaTeacherZodSchema), registerController.createTeacher);
router.post("/create-student", validation(diplomaStudentZodSchema), registerController.createStudent);

export const RegisterRouter = router;
