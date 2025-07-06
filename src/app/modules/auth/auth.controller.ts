import { Request, Response } from "express";
import { sendResponse } from "../../utility/sendResponse";
import httpsStatus from "http-status-codes";
import { catchAsync } from "../../middleware/catchAsync";
import { AuthServices } from "./auth.services";
import config from "../../config";


const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken } = result
  console.log(config.node)
  res.cookie("refreshToken", refreshToken, {
    secure: config.node === "development" ? false : true,
    httpOnly: config.node === "development" ? false : true
  })
  sendResponse(res, {
    statusCode: httpsStatus.CREATED,
    success: true,
    message: "User Login Successfully",
    data: { accessToken },
  });
});

export const AuthController = {
  loginUser,

};
