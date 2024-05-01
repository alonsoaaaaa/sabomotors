/*
  Warnings:

  - Added the required column `make` to the `AvailableCars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableCars" ADD COLUMN     "make" TEXT NOT NULL;
