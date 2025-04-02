/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `NFT` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "NFT" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "NFT_slug_key" ON "NFT"("slug");

-- CreateIndex
CREATE INDEX "NFT_slug_idx" ON "NFT"("slug");
