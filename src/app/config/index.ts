import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  salt_round: process.env.SALT_ROUND,
  node:process.env.NODE_ENV,
  token: {
    access_secret: process.env.ACCESS_SECRET,
    access_expire: process.env.ACCESS_EXPIRE,
    refresh_secret: process.env.REFRESH_SECRET,
    refresh_expire: process.env.REFRESH_EXPIRE,
  }
};
