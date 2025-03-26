-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "totalAssets" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "txCreationHash" DROP NOT NULL;

-- AlterTable
ALTER TABLE "GameLayerg" ADD COLUMN     "platform" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "totalCls" INTEGER NOT NULL DEFAULT 0;
