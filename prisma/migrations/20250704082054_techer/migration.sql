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

-- CreateTable
CREATE TABLE "teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "bloodGroup" "BloodGroup",
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "emergencyContact" TEXT,
    "presentAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "status" "EmploymentStatus" NOT NULL,
    "joiningDate" TIMESTAMP(3) NOT NULL,
    "designation" "Designation" NOT NULL,
    "department" TEXT NOT NULL,
    "trainingCompleted" BOOLEAN NOT NULL,
    "teachingSubject" TEXT,
    "nidNumber" TEXT,
    "birthCertificateNo" TEXT,
    "nationality" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "group" "Group",
    "photoUrl" TEXT,
    "signatureUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teacher_phoneNumber_key" ON "teacher"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_email_key" ON "teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_teacherId_key" ON "teacher"("teacherId");
