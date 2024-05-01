-- AlterTable
ALTER TABLE "AvailableCars" ALTER COLUMN "features" DROP NOT NULL,
ALTER COLUMN "features" SET DATA TYPE TEXT;
