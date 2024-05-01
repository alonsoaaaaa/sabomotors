/*
  Warnings:

  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Car";

-- CreateTable
CREATE TABLE "CarOffer" (
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

    CONSTRAINT "CarOffer_pkey" PRIMARY KEY ("id")
);
