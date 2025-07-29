import { DiplomaStudent, DiplomaTeacher } from "@prisma/client";
import * as argon2 from "argon2";
import { TDiplomaStudent, TDiplomaTeacher } from "./register.interfaces";
import prisma from "../../utility/prismaClient";

const createTeacherIntoDB = async (payload: TDiplomaTeacher) => {
  console.log(payload)
  const hashedPassword = await argon2.hash(payload.password);
  const userData = {
    email: payload.email,
    password: hashedPassword,
    role: payload.role,
  }
  const result = await prisma.$transaction(async (ts) => {
    await ts.user.create({
      data: userData
    });

    const teacherData = await ts.diplomaTeacher.create({
      data: {
        name: payload.name,
        email: payload.email,
        fatherName: payload.fatherName,
        motherName: payload.motherName,
        gender: payload.gender,
        dateOfBirth: payload.dateOfBirth,
        bloodGroup: payload.bloodGroup,
        phoneNumber: payload.phoneNumber,
        emergencyContact: payload.emergencyContact,
        presentAddress: payload.presentAddress,
        permanentAddress: payload.permanentAddress, // ✅ Corrected

        teacherId: payload.teacherId,
        status: payload.status,
        joiningDate: payload.joiningDate,
        designation: payload.designation,
        department: payload.department,

        trainingCompleted: payload.trainingCompleted, // ✅ Added
        teachingSubject: payload.teachingSubject,
        nidNumber: payload.nidNumber,
        birthCertificateNo: payload.birthCertificateNo,
        nationality: payload.nationality,
        religion: payload.religion,
        maritalStatus: payload.maritalStatus,
        photoUrl: payload.photoUrl,
        signatureUrl: payload.signatureUrl,
      },

    });

    return teacherData
  });
  return result
};
const createStudentIntoDB = async (payload: DiplomaStudent) => {
  const result = await prisma.diplomaStudent.create({
    data: {
      ...payload
    }
  });
  console.log(result)
  return result
};


export const registerServices = {
  createTeacherIntoDB,
  createStudentIntoDB
};
