-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_chainId_fkey";

-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "chainId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "Chain"("chainId") ON DELETE SET NULL ON UPDATE CASCADE;
