import { Router } from "express";
import { registerController } from "./register.controller";

const router = Router();
router.post("/create-teacher", registerController.createTeacher);

export const RegisterRouter = router;
