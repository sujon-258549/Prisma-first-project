import { DiplomaTeacher } from "@prisma/client";

const createTeacherIntoDB = async (payload: DiplomaTeacher) => {
  console.log(payload);
};

export const registerServices = {
  createTeacherIntoDB,
};
