/*
  Warnings:

  - Added the required column `email` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "contact_number" DROP NOT NULL;
