/*
  Warnings:

  - Made the column `image` on table `Car` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "image" SET NOT NULL;
