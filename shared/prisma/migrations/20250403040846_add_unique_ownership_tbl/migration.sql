/*
  Warnings:

  - A unique constraint covering the columns `[userAddress,nftId,collectionId]` on the table `Ownership` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ownership_userAddress_nftId_collectionId_key" ON "Ownership"("userAddress", "nftId", "collectionId");
