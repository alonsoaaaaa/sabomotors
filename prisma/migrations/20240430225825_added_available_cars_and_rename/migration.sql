/*
  Warnings:

  - You are about to drop the `CarOffer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CarOffer";

-- CreateTable
CREATE TABLE "CarOffers" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "mileage" DOUBLE PRECISION,
    "make" TEXT,
    "image" TEXT[],
    "vin" TEXT,
    "FactureType" TEXT NOT NULL,
    "insurance" TEXT,
    "platenum" TEXT,
    "contact_number" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CarOffers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableCars" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT[],
    "FactureType" TEXT,
    "tenure" TEXT,
    "credit" TEXT,
    "features" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "AvailableCars_pkey" PRIMARY KEY ("id")
);
