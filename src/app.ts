import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { notFoundRoute } from "./utility/notFoundRoute";
import { globalErrorHandler } from "./modules/middleware/globalerrorHandler";

app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

app.use(notFoundRoute);
export default app;
