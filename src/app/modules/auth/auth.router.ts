import { Router } from "express";
import { AuthController } from "./auth.controller";
import validation from "../../middleware/validation";
import { loginZodSchema } from "./auth.zod.validation";

const router = Router();
router.post("/", validation(loginZodSchema),  AuthController.loginUser);

export const authRTouter = router;
