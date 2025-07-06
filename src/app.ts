import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { notFoundRoute } from "./app/utility/notFoundRoute";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { mainRouter } from "./app/router/indes";
import cookieParser from "cookie-parser";
import config from "../src/app/config";
app.use(cors({
  origin: "http://localhost:3000", // or your frontend origin
  credentials: config.node !== "development" ? true : false,
}));
app.use(express.json())
app.use(cookieParser())
app.get("/", (req: Request, res: Response) => {
  res.send("Diploma student management project");
});
app.use(mainRouter);
app.use(globalErrorHandler);
app.use(notFoundRoute);
export default app;
