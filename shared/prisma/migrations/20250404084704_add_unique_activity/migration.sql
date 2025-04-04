/*
  Warnings:

  - A unique constraint covering the columns `[logId]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "logId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Activity_logId_key" ON "Activity"("logId");
