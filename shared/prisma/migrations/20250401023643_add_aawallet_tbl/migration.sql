-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" TEXT;

-- CreateTable
CREATE TABLE "AAWallet" (
    "id" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "type" TEXT,
    "uaId" TEXT,
    "aaAddress" TEXT,
    "factoryAddress" TEXT,
    "telegramId" TEXT,
    "facebookId" TEXT,
    "twitterId" TEXT,
    "googleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "AAWallet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AAWallet" ADD CONSTRAINT "AAWallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
