/*
  Warnings:

  - Added the required column `subject` to the `AttendanceData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AttendanceData" ADD COLUMN     "subject" TEXT NOT NULL;
