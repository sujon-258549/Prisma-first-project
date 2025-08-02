import AppError from "../../middleware/appError";
import prisma from "../../utility/prismaClient";
import argon2 from "argon2"
import { createToken } from "../../utility/token";
import config from "../../config";

const loginUser = async (payload: any) => {
  const existingUser = await prisma.user.findFirstOrThrow({
    where: {
      email: payload.email
    }
  })

  const matchPassword = await argon2.verify(existingUser.password, payload.password)
  if (!matchPassword) {
    throw new AppError(401, "User Not Authorize !!")
  }

  const accessToken = createToken({ email: existingUser.email, role: existingUser.role }, config.token.access_secret as string,
    config.token.access_expire as string)
  const refreshToken = createToken({ email: existingUser.email, role: existingUser.role }, config.token.refresh_secret as string,
    config.token.refresh_expire as string)

  return { accessToken, refreshToken }
};


export const AuthServices = {
  loginUser,
};
