/*
  Warnings:

  - You are about to drop the column `vim` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "vim",
ADD COLUMN     "vin" TEXT;
