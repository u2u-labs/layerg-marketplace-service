-- CreateEnum
CREATE TYPE "TX_STATUS" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "CONTRACT_TYPE" AS ENUM ('ERC1155', 'ERC721');

-- CreateEnum
CREATE TYPE "SELL_STATUS" AS ENUM ('AskNew', 'AskCancel', 'Trade', 'AcceptBid', 'Bid', 'CancelBid');

-- CreateEnum
CREATE TYPE "ORDERSTATUS" AS ENUM ('OPEN', 'PENDING', 'CANCELLED', 'FILLED');

-- CreateEnum
CREATE TYPE "ORDERTYPE" AS ENUM ('BID', 'BULK', 'SINGLE');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT,
    "avatar" TEXT,
    "username" TEXT,
    "signature" TEXT,
    "signedMessage" TEXT,
    "signer" TEXT NOT NULL,
    "publicKey" TEXT,
    "signDate" TIMESTAMP(3),
    "acceptedTerms" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bio" TEXT,
    "facebookLink" TEXT,
    "twitterLink" TEXT,
    "telegramLink" TEXT,
    "shortLink" TEXT,
    "discordLink" TEXT,
    "webURL" TEXT,
    "coverImage" TEXT,
    "followers" INTEGER DEFAULT 0,
    "following" INTEGER DEFAULT 0,
    "accountStatus" BOOLEAN NOT NULL DEFAULT false,
    "verifyEmail" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "metricPoint" BIGINT DEFAULT 0,
    "metricDetail" JSONB DEFAULT '{"Verified":0,"Followers":{"key":"follower_lv0","value":0,"point":0,"total":0},"CollectionMetric":0,"VolumeIndividual":0}',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NFT" (
    "id" VARCHAR(255) NOT NULL,
    "u2uId" VARCHAR(255),
    "description" TEXT,
    "name" TEXT NOT NULL,
    "nameSlug" TEXT,
    "image" TEXT,
    "animationUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "TX_STATUS" NOT NULL,
    "tokenUri" TEXT NOT NULL,
    "txCreationHash" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "creatorId" UUID,
    "collectionId" UUID NOT NULL,
    "metricPoint" BIGINT DEFAULT 0,
    "metricDetail" JSONB DEFAULT '{"VolumeIndividual":0,"UserMetric":0}',
    "source" TEXT,

    CONSTRAINT "NFT_pkey" PRIMARY KEY ("id","collectionId")
);

-- CreateTable
CREATE TABLE "Trait" (
    "id" UUID NOT NULL,
    "trait_type" TEXT NOT NULL,
    "display_type" TEXT,
    "value" TEXT NOT NULL,
    "collectionId" UUID NOT NULL,
    "nftId" TEXT NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNFT" (
    "userId" UUID NOT NULL,
    "nftId" VARCHAR(255) NOT NULL,
    "collectionId" UUID NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "UserNFT_pkey" PRIMARY KEY ("userId","nftId","collectionId")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" UUID NOT NULL,
    "txCreationHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameSlug" TEXT,
    "symbol" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT,
    "shortUrl" TEXT,
    "metadata" TEXT,
    "isU2U" BOOLEAN NOT NULL DEFAULT true,
    "status" "TX_STATUS" NOT NULL,
    "type" "CONTRACT_TYPE" NOT NULL,
    "categoryId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "coverImage" TEXT,
    "avatar" TEXT,
    "projectId" UUID,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "floorPrice" BIGINT NOT NULL DEFAULT 0,
    "floor" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "floorWei" TEXT NOT NULL DEFAULT '0',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "flagExtend" BOOLEAN DEFAULT false,
    "isSync" BOOLEAN DEFAULT true,
    "subgraphUrl" TEXT,
    "lastTimeSync" INTEGER DEFAULT 0,
    "metricPoint" BIGINT DEFAULT 0,
    "metricDetail" JSONB DEFAULT '{"Verified":0,"Volume":{"key":"volume_lv0","value":"0","point":0,"total":0},"TotalUniqueOwner":{"key":"owner_lv0","value":"0","point":0,"total":0},"TotalItems":{"key":"item_lv0","value":0,"point":0,"total":0},"Followers":{"key":"follower_lv0","value":0,"point":0,"total":0}}',
    "metadataJson" JSONB,
    "gameId" TEXT,
    "source" TEXT,
    "categoryG" JSONB,
    "vol" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "volumeWei" TEXT NOT NULL DEFAULT '0',

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCollection" (
    "userId" UUID NOT NULL,
    "collectionId" UUID NOT NULL,

    CONSTRAINT "UserCollection_pkey" PRIMARY KEY ("userId","collectionId")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" UUID NOT NULL,
    "idOnchain" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "banner" TEXT,
    "description" TEXT,
    "details" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "organization" TEXT,
    "website" TEXT,
    "telegram" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "discord" TEXT,
    "twitter" TEXT,
    "shortLink" TEXT,
    "logo" TEXT,
    "isActivated" BOOLEAN NOT NULL DEFAULT true,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectRound" (
    "projectId" UUID NOT NULL,
    "roundId" INTEGER NOT NULL,
    "address" TEXT,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "stakeBefore" TIMESTAMP(3),
    "maxPerWallet" INTEGER,
    "totalNftt" INTEGER,
    "price" TEXT,
    "instruction" TEXT,
    "requiredStaking" TEXT,
    "claimableStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "claimableIds" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "ProjectRound_pkey" PRIMARY KEY ("projectId","roundId")
);

-- CreateTable
CREATE TABLE "UserProject" (
    "userId" UUID NOT NULL,
    "projectId" UUID NOT NULL,
    "subscribeDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stakingTotal" TEXT,
    "lastDateRecord" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProject_pkey" PRIMARY KEY ("userId","projectId")
);

-- CreateTable
CREATE TABLE "RoundInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "type" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "RoundInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundRangeTime" (
    "id" UUID NOT NULL,
    "roundId" INTEGER NOT NULL,
    "projectId" UUID NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoundRangeTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFollow" (
    "userId" UUID NOT NULL,
    "followerId" UUID NOT NULL,
    "isFollow" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "UserFollow_pkey" PRIMARY KEY ("userId","followerId")
);

-- CreateTable
CREATE TABLE "MarketplaceStatus" (
    "id" SERIAL NOT NULL,
    "tokenId" VARCHAR(255) NOT NULL,
    "collectionId" UUID NOT NULL,
    "quoteToken" VARCHAR(255),
    "timestamp" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "priceWei" TEXT NOT NULL,
    "netPrice" DOUBLE PRECISION NOT NULL,
    "netPriceWei" TEXT NOT NULL,
    "event" "SELL_STATUS" NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "operationId" TEXT,
    "txHash" TEXT,
    "operation" TEXT,
    "from" TEXT,
    "askId" TEXT,
    "metricPoint" BIGINT DEFAULT 0,

    CONSTRAINT "MarketplaceStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncMasterData" (
    "timestamp" INTEGER NOT NULL DEFAULT 0,
    "type" TEXT NOT NULL,
    "syncDataStatus" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SyncMasterData_pkey" PRIMARY KEY ("type")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" UUID NOT NULL,
    "avatar" TEXT,
    "fullName" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "twitterLink" TEXT,
    "telegramLink" TEXT,
    "phone" TEXT,
    "roles" TEXT[] DEFAULT ARRAY['VIEWER']::TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "keyRole" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogAction" (
    "id" BIGSERIAL NOT NULL,
    "detail" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" UUID NOT NULL,

    CONSTRAINT "LogAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" BIGSERIAL NOT NULL,
    "nameTopic" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" UUID NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" UUID NOT NULL,
    "description" TEXT,
    "content" VARCHAR(35000),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogTopic" (
    "id" BIGSERIAL NOT NULL,
    "topicId" BIGINT NOT NULL,
    "blogId" UUID NOT NULL,

    CONSTRAINT "BlogTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuoteTokens" (
    "address" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "derivedETH" DOUBLE PRECISION NOT NULL,
    "derivedUSD" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "QuoteTokens_pkey" PRIMARY KEY ("address")
);

-- CreateTable
CREATE TABLE "AnalysisCollection" (
    "id" TEXT NOT NULL,
    "collectionId" UUID NOT NULL,
    "keyTime" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "type" "CONTRACT_TYPE" NOT NULL,
    "volume" DECIMAL(78,0) NOT NULL DEFAULT 0,
    "vol" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "volumeWei" TEXT NOT NULL DEFAULT '0',
    "floorPrice" BIGINT NOT NULL DEFAULT 0,
    "floor" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "floorWei" TEXT NOT NULL DEFAULT '0',
    "items" BIGINT NOT NULL DEFAULT 0,
    "owner" BIGINT NOT NULL DEFAULT 0,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalysisCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" UUID NOT NULL,
    "nameSlug" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "banner" TEXT,
    "description" TEXT,
    "creator" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OverviewTemplate" (
    "id" UUID NOT NULL,
    "platformId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "banner" TEXT,
    "description" TEXT,
    "sections" JSONB,
    "isActive" BOOLEAN NOT NULL,
    "creator" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "OverviewTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "index" INTEGER NOT NULL DEFAULT 1,
    "sig" TEXT NOT NULL,
    "makerId" UUID NOT NULL,
    "makeAssetType" INTEGER NOT NULL,
    "makeAssetAddress" TEXT NOT NULL,
    "makeAssetValue" TEXT NOT NULL,
    "makeAssetId" TEXT NOT NULL,
    "takerId" UUID,
    "takeAssetType" INTEGER NOT NULL,
    "takeAssetAddress" TEXT NOT NULL,
    "takeAssetValue" TEXT NOT NULL,
    "takeAssetId" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "start" INTEGER NOT NULL DEFAULT 0,
    "end" INTEGER NOT NULL DEFAULT 0,
    "orderStatus" "ORDERSTATUS" NOT NULL DEFAULT 'OPEN',
    "orderType" "ORDERTYPE" NOT NULL,
    "root" TEXT NOT NULL DEFAULT '0x0000000000000000000000000000000000000000000000000000000000000000',
    "proof" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tokenId" VARCHAR(255) NOT NULL,
    "collectionId" UUID NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" TEXT NOT NULL DEFAULT '0',
    "priceNum" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "netPrice" TEXT NOT NULL DEFAULT '0',
    "netPriceNum" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "quoteToken" TEXT NOT NULL,
    "filledQty" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("sig","index")
);

-- CreateTable
CREATE TABLE "OrderHistory" (
    "id" UUID NOT NULL,
    "index" INTEGER NOT NULL DEFAULT 1,
    "sig" TEXT NOT NULL,
    "nonce" TEXT,
    "fromId" UUID NOT NULL,
    "toId" UUID NOT NULL,
    "qtyMatch" INTEGER NOT NULL DEFAULT 0,
    "price" TEXT NOT NULL DEFAULT '0',
    "priceNum" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "timestamp" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OrderHistory_pkey" PRIMARY KEY ("id")
);

-- Generate Slug From Input
CREATE OR REPLACE FUNCTION generate_slug(title VARCHAR)
RETURNS VARCHAR AS $$
DECLARE
    slug VARCHAR;
BEGIN
    -- Convert to lowercase
    slug := LOWER(title);

    -- Replace accented characters
    slug := TRANSLATE(slug,
        'áàảạãăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ',
        'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd');

    -- Replace consecutive hyphens with a single hyphen
    slug := REGEXP_REPLACE(slug, '-{2,}', '', 'g');

    -- Remove leading and trailing hyphens
    slug := TRIM(BOTH '-' FROM slug);
	
	-- Replace special characters
    slug := REGEXP_REPLACE(slug, '[^a-z0-9]', '', 'g');

    RETURN slug;
END;
$$ LANGUAGE plpgsql;

-- Function Change Name Slug when 
CREATE OR REPLACE FUNCTION generate_slug_trigger()
RETURNS TRIGGER AS $$
BEGIN
    -- Ensure the title is not null before generating the slug
    IF NEW."nameSlug" IS NULL OR NEW."name" IS DISTINCT FROM OLD."name" THEN
        -- Update the "nameSlug" column with the new slug
        NEW."nameSlug" := generate_slug(NEW."name");
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;



-- Trigger Create Collection
CREATE OR REPLACE TRIGGER collection_generate_slug
BEFORE INSERT OR UPDATE OF "name" ON "Collection"
FOR EACH ROW
EXECUTE FUNCTION generate_slug_trigger();

-- Update All Collection Exists
UPDATE "Collection"
SET "nameSlug" = generate_slug("name")
WHERE "nameSlug" IS NULL OR "nameSlug" = '';



-- Trigger Create NFT 
CREATE OR REPLACE TRIGGER nft_generate_slug
BEFORE INSERT OR UPDATE OF "name" ON "NFT"
FOR EACH ROW
EXECUTE FUNCTION generate_slug_trigger();

-- Update All Collection Exists
UPDATE "NFT"
SET "nameSlug" = generate_slug("name")
WHERE "nameSlug" IS NULL OR "nameSlug" = '';

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_signature_key" ON "User"("signature");

-- CreateIndex
CREATE UNIQUE INDEX "User_signer_key" ON "User"("signer");

-- CreateIndex
CREATE UNIQUE INDEX "User_shortLink_key" ON "User"("shortLink");

-- CreateIndex
CREATE INDEX "NFT_u2uId_collectionId_isActive_idx" ON "NFT"("u2uId", "collectionId", "isActive");

-- CreateIndex
CREATE INDEX "Trait_nftId_collectionId_idx" ON "Trait"("nftId", "collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_txCreationHash_key" ON "Collection"("txCreationHash");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_name_key" ON "Collection"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_address_key" ON "Collection"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_shortUrl_key" ON "Collection"("shortUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_projectId_key" ON "Collection"("projectId");

-- CreateIndex
CREATE INDEX "Collection_address_idx" ON "Collection" USING HASH ("address");

-- CreateIndex
CREATE INDEX "Project_id_isActivated_isDelete_idx" ON "Project"("id", "isActivated", "isDelete");

-- CreateIndex
CREATE INDEX "RoundInfo_id_isActive_isDelete_idx" ON "RoundInfo"("id", "isActive", "isDelete");

-- CreateIndex
CREATE INDEX "MarketplaceStatus_tokenId_collectionId_idx" ON "MarketplaceStatus"("tokenId", "collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- CreateIndex
CREATE INDEX "Account_id_isActive_isDelete_idx" ON "Account"("id", "isActive", "isDelete");

-- CreateIndex
CREATE INDEX "Blog_id_isActive_isDelete_idx" ON "Blog"("id", "isActive", "isDelete");

-- CreateIndex
CREATE UNIQUE INDEX "QuoteTokens_address_key" ON "QuoteTokens"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_nameSlug_key" ON "Platform"("nameSlug");

-- CreateIndex
CREATE INDEX "Platform_nameSlug_idx" ON "Platform"("nameSlug");

-- CreateIndex
CREATE INDEX "Order_sig_index_idx" ON "Order"("sig", "index");

-- CreateIndex
CREATE INDEX "OrderHistory_sig_index_nonce_idx" ON "OrderHistory"("sig", "index", "nonce");

-- AddForeignKey
ALTER TABLE "NFT" ADD CONSTRAINT "NFT_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NFT" ADD CONSTRAINT "NFT_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trait" ADD CONSTRAINT "Trait_nftId_collectionId_fkey" FOREIGN KEY ("nftId", "collectionId") REFERENCES "NFT"("id", "collectionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNFT" ADD CONSTRAINT "UserNFT_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNFT" ADD CONSTRAINT "UserNFT_nftId_collectionId_fkey" FOREIGN KEY ("nftId", "collectionId") REFERENCES "NFT"("id", "collectionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollection" ADD CONSTRAINT "UserCollection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollection" ADD CONSTRAINT "UserCollection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRound" ADD CONSTRAINT "ProjectRound_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRound" ADD CONSTRAINT "ProjectRound_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "RoundInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundRangeTime" ADD CONSTRAINT "RoundRangeTime_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "RoundInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundRangeTime" ADD CONSTRAINT "RoundRangeTime_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollow" ADD CONSTRAINT "UserFollow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollow" ADD CONSTRAINT "UserFollow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketplaceStatus" ADD CONSTRAINT "marketplace_by_id_fk" FOREIGN KEY ("tokenId", "collectionId") REFERENCES "NFT"("id", "collectionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogAction" ADD CONSTRAINT "LogAction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogTopic" ADD CONSTRAINT "BlogTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogTopic" ADD CONSTRAINT "BlogTopic_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisCollection" ADD CONSTRAINT "AnalysisCollection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OverviewTemplate" ADD CONSTRAINT "OverviewTemplate_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_makerId_fkey" FOREIGN KEY ("makerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_takerId_fkey" FOREIGN KEY ("takerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "order_by_id_fk" FOREIGN KEY ("tokenId", "collectionId") REFERENCES "NFT"("id", "collectionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderHistory" ADD CONSTRAINT "OrderHistory_sig_index_fkey" FOREIGN KEY ("sig", "index") REFERENCES "Order"("sig", "index") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderHistory" ADD CONSTRAINT "OrderHistory_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderHistory" ADD CONSTRAINT "OrderHistory_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
