import { Router } from "express";
import { registerController } from "./register.controller";
import validation from "../middleware/validation";
import { diplomaTeacherZodSchema } from "./zod.validation";

const router = Router();
router.post("/create-teacher", validation(diplomaTeacherZodSchema), registerController.createTeacher);

export const RegisterRouter = router;
