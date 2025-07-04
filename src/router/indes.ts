import { Router } from "express";
import { RegisterRouter } from "../modules/register/register.router";

const router = Router();

const allRouter = [
  {
    path: "/register",
    router: RegisterRouter,
  },
];

allRouter.forEach((routerItem) =>
  router.use(routerItem.path, routerItem.router)
);

export const mainRouter = router;
