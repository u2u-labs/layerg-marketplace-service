-- CreateTable
CREATE TABLE "Ownership" (
    "id" TEXT NOT NULL,
    "userAddress" TEXT NOT NULL,
    "nftId" TEXT,
    "collectionId" UUID,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "chainId" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Ownership_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Ownership_userAddress_nftId_collectionId_idx" ON "Ownership"("userAddress", "nftId", "collectionId");

-- CreateIndex
CREATE INDEX "Ownership_userAddress_idx" ON "Ownership"("userAddress");

-- CreateIndex
CREATE INDEX "Ownership_userAddress_collectionId_idx" ON "Ownership"("userAddress", "collectionId");

-- AddForeignKey
ALTER TABLE "Ownership" ADD CONSTRAINT "Ownership_nftId_collectionId_fkey" FOREIGN KEY ("nftId", "collectionId") REFERENCES "NFT"("id", "collectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ownership" ADD CONSTRAINT "Ownership_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
