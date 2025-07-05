-- DropForeignKey
ALTER TABLE "ClassTest" DROP CONSTRAINT "ClassTest_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "ClassTest" DROP CONSTRAINT "ClassTest_userId_fkey";

-- DropForeignKey
ALTER TABLE "SemesterResult" DROP CONSTRAINT "SemesterResult_id_fkey";

-- AlterTable
ALTER TABLE "ClassTest" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "teacherId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SemesterResult" ADD COLUMN     "studentId" TEXT;

-- AddForeignKey
ALTER TABLE "ClassTest" ADD CONSTRAINT "ClassTest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "DiplomaStudent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassTest" ADD CONSTRAINT "ClassTest_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SemesterResult" ADD CONSTRAINT "SemesterResult_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "DiplomaStudent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
