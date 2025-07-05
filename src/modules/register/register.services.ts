import { DiplomaTeacher } from "@prisma/client";

const createTeacherIntoDB = async (payload: DiplomaTeacher) => {
return payload
};

export const registerServices = {
  createTeacherIntoDB,
};
