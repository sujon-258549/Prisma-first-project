import { DiplomaStudent, DiplomaTeacher } from "@prisma/client";
import * as argon2 from "argon2";
import config from "../../config";
import prisma from "../../utility/prismaclinet";

const createTeacherIntoDB = async (payload: DiplomaTeacher) => {
  const hashedPassword = await argon2.hash(payload.password);
  const result = await prisma.diplomaTeacher.create({
    data: {
      ...payload,
      password: hashedPassword,
    },
  });
  return result
};
const createStudentIntoDB = async (payload: DiplomaStudent) => {
  const result = await prisma.diplomaStudent.create({
    data: {
      ...payload
    }
  });
  return result
};


export const registerServices = {
  createTeacherIntoDB,
  createStudentIntoDB
};
