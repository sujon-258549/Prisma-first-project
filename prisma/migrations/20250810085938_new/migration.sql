-- CreateEnum
CREATE TYPE "BloodGroup" AS ENUM ('A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG', 'O_POS', 'O_NEG');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('MARRIED', 'UNMARRIED', 'DIVORCED', 'WIDOWED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SUPPER_ADMIN', 'FACULTY', 'STUDENT');

-- CreateEnum
CREATE TYPE "Group" AS ENUM ('A_GROUP', 'B_GROUP', 'C_GROUP', 'D_GROUP');

-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'ON_LEAVE', 'RETIRED', 'RESIGNED');

-- CreateEnum
CREATE TYPE "Designation" AS ENUM ('LECTURER', 'INSTRUCTOR', 'SENIOR_INSTRUCTOR', 'HEAD_OF_DEPARTMENT', 'VICE_PRINCIPAL', 'PRINCIPAL');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "EducationGroup" AS ENUM ('A_GROUP', 'B_GROUP');

-- CreateEnum
CREATE TYPE "Shift" AS ENUM ('MORNING', 'EVENING');

-- CreateEnum
CREATE TYPE "Semester" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'END');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('ELECTRONIC', 'ELECTROMADICAL', 'COMPUTER', 'POWER', 'MECHANICAL', 'ELECTRICAL', 'CIVIL', 'NONE_TECH');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "bloodGroup" "BloodGroup",
    "phoneNumber" TEXT NOT NULL,
    "emergencyContact" TEXT,
    "presentAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "status" "EmploymentStatus" NOT NULL DEFAULT 'ACTIVE',
    "joiningDate" TEXT NOT NULL,
    "designation" "Designation" NOT NULL,
    "department" "Department" NOT NULL,
    "trainingCompleted" BOOLEAN NOT NULL DEFAULT false,
    "teachingSubject" TEXT,
    "nidNumber" TEXT,
    "birthCertificateNo" TEXT,
    "nationality" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "needPasswordChange" BOOLEAN NOT NULL DEFAULT true,
    "photoUrl" TEXT,
    "signatureUrl" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "bloodGroup" "BloodGroup",
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "presentAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "department" "Department" NOT NULL,
    "semester" "Semester" NOT NULL,
    "emergencyContact" TEXT,
    "registrationNo" TEXT,
    "rollNo" TEXT,
    "cgpa" TEXT DEFAULT '0.00',
    "regularStudent" BOOLEAN NOT NULL DEFAULT true,
    "group" "EducationGroup" NOT NULL,
    "shift" "Shift" NOT NULL,
    "passingYear" INTEGER DEFAULT 0,
    "nationality" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "startEducationYear" INTEGER NOT NULL,
    "photoUrl" TEXT,
    "classTenSchoolName" TEXT NOT NULL,
    "classTenBoard" TEXT NOT NULL,
    "classTenGroup" TEXT NOT NULL,
    "classTenRollNo" TEXT NOT NULL,
    "classTenRegistrationNo" TEXT NOT NULL,
    "classTenGPA" TEXT NOT NULL,
    "classTenPassingYear" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classTests" (
    "id" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "semesterNo" INTEGER NOT NULL,
    "testNumber" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "markNumber" INTEGER NOT NULL,
    "earnNumber" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "classTests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "results" (
    "id" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "semesterNo" INTEGER NOT NULL,
    "totalMarks" DOUBLE PRECISION NOT NULL,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceData" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "group" "Group" NOT NULL,
    "semester" "Semester" NOT NULL,
    "shiftName" "Shift" NOT NULL,
    "departmentName" "Department" NOT NULL,
    "teacherId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttendanceData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceStudentData" (
    "id" TEXT NOT NULL,
    "attendanceId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "isAttended" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AttendanceStudentData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_email_key" ON "teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_phoneNumber_key" ON "teacher"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_teacherId_key" ON "teacher"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "students_phoneNumber_key" ON "students"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_registrationNo_key" ON "students"("registrationNo");

-- CreateIndex
CREATE UNIQUE INDEX "students_rollNo_key" ON "students"("rollNo");

-- CreateIndex
CREATE UNIQUE INDEX "classTests_userId_key" ON "classTests"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "classTests_teacherId_key" ON "classTests"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "results_studentId_key" ON "results"("studentId");

-- AddForeignKey
ALTER TABLE "teacher" ADD CONSTRAINT "teacher_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classTests" ADD CONSTRAINT "classTests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classTests" ADD CONSTRAINT "classTests_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "results" ADD CONSTRAINT "results_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceData" ADD CONSTRAINT "AttendanceData_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceStudentData" ADD CONSTRAINT "AttendanceStudentData_attendanceId_fkey" FOREIGN KEY ("attendanceId") REFERENCES "AttendanceData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceStudentData" ADD CONSTRAINT "AttendanceStudentData_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
