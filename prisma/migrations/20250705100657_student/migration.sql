-- CreateTable
CREATE TABLE "DiplomaStudent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "bloodGroup" "BloodGroup" NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "presentAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "instituteName" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,
    "registrationNo" TEXT NOT NULL,
    "rollNo" TEXT NOT NULL,
    "gpa" DOUBLE PRECISION,
    "passingYear" INTEGER,
    "classTenSchoolName" TEXT NOT NULL,
    "classTenBoard" TEXT NOT NULL,
    "classTenGroup" TEXT NOT NULL,
    "classTenRollNo" TEXT NOT NULL,
    "classTenRegistrationNo" TEXT NOT NULL,
    "classTenGPA" DOUBLE PRECISION NOT NULL,
    "classTenExamYear" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiplomaStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassTest" (
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

    CONSTRAINT "ClassTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SemesterResult" (
    "id" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "semesterNo" INTEGER NOT NULL,
    "totalMarks" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SemesterResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiplomaStudent_phoneNumber_key" ON "DiplomaStudent"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "DiplomaStudent_email_key" ON "DiplomaStudent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DiplomaStudent_registrationNo_key" ON "DiplomaStudent"("registrationNo");

-- CreateIndex
CREATE UNIQUE INDEX "DiplomaStudent_rollNo_key" ON "DiplomaStudent"("rollNo");

-- AddForeignKey
ALTER TABLE "ClassTest" ADD CONSTRAINT "ClassTest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "DiplomaStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassTest" ADD CONSTRAINT "ClassTest_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SemesterResult" ADD CONSTRAINT "SemesterResult_id_fkey" FOREIGN KEY ("id") REFERENCES "DiplomaStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
