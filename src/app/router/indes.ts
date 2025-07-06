import { Router } from "express";
import { RegisterRouter } from "../modules/register/register.router";
import { authRTouter } from "../modules/auth/auth.router";

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
];

allRouter.forEach((routerItem) =>
  router.use(routerItem.path, routerItem.router)
);

export const mainRouter = router;
