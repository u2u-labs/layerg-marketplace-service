/*
  Warnings:

  - Added the required column `gameId` to the `NFT` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NFT" ADD COLUMN     "gameId" TEXT NOT NULL;
