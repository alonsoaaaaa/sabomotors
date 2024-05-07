/*
  Warnings:

  - The `features` column on the `AvailableCars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `contact_number` on table `CarOffers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AvailableCars" DROP COLUMN "features",
ADD COLUMN     "features" TEXT[],
ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CarOffers" ALTER COLUMN "contact_number" SET NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL;
