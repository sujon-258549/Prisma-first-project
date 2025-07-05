import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { notFoundRoute } from "./utility/notFoundRoute";
import { globalErrorHandler } from "./modules/middleware/globalErrorHandler";
import { mainRouter } from "./router/indes";

app.use(cors());
app.use(express.json())
app.get("/", (req: Request, res: Response) => {
  res.send("Diploma student management project");
});
app.use(mainRouter);
app.use(globalErrorHandler);
app.use(notFoundRoute);
export default app;
