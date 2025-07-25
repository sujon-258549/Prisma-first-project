import { Router } from "express";
import { RegisterRouter } from "../modules/register/register.router";
import { authRTouter } from "../modules/auth/auth.router";
import { attendanceRouter } from "../modules/attendance/attendance.router";

const router = Router();

const allRouter = [
  {
    path: "/register",
    router: RegisterRouter,
  },
  {
    path: "/auth",
    router: authRTouter,
  },
  {
    path: "/attendance",
    router: attendanceRouter,
  },
];

allRouter.forEach((routerItem) =>
  router.use(routerItem.path, routerItem.router)
);

export const mainRouter = router;
