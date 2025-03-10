/*
  Warnings:

  - Added the required column `ownerId` to the `NFT` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MULTICHAIN_CONTRACT_TYPE" AS ENUM ('MARKETPLACE', 'ERC721_PROXY', 'ERC1155_PROXY');

-- DropIndex
DROP INDEX "NFT_u2uId_collectionId_isActive_idx";

-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "chainId" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "NFT" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Chain" (
    "chainId" BIGINT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT '',
    "blockchain" TEXT NOT NULL DEFAULT '',
    "explorerUrl" TEXT NOT NULL,
    "rpcUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "ContractMarketplace" (
    "id" UUID NOT NULL,
    "contractType" "MULTICHAIN_CONTRACT_TYPE" NOT NULL,
    "address" TEXT NOT NULL,
    "chainId" BIGINT NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContractMarketplace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chain_chainId_key" ON "Chain"("chainId");

-- CreateIndex
CREATE INDEX "ContractMarketplace_chainId_address_idx" ON "ContractMarketplace"("chainId", "address");

-- CreateIndex
CREATE INDEX "NFT_u2uId_collectionId_isActive_ownerId_idx" ON "NFT"("u2uId", "collectionId", "isActive", "ownerId");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "Chain"("chainId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractMarketplace" ADD CONSTRAINT "ContractMarketplace_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "Chain"("chainId") ON DELETE CASCADE ON UPDATE CASCADE;
