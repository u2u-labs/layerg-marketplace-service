/*
  Warnings:

  - A unique constraint covering the columns `[aaAddress,appKey]` on the table `AAWallet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "AAWallet" ADD COLUMN     "appKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "AAWallet_aaAddress_appKey_key" ON "AAWallet"("aaAddress", "appKey");
