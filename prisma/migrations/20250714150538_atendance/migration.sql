-- CreateTable
CREATE TABLE "AttendanceData" (
    "id" TEXT NOT NULL,
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

-- AddForeignKey
ALTER TABLE "AttendanceData" ADD CONSTRAINT "AttendanceData_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceStudentData" ADD CONSTRAINT "AttendanceStudentData_attendanceId_fkey" FOREIGN KEY ("attendanceId") REFERENCES "AttendanceData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceStudentData" ADD CONSTRAINT "AttendanceStudentData_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
