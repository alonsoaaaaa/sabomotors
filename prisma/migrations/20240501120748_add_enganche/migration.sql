/*
  Warnings:

  - Added the required column `downpayment` to the `AvailableCars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableCars" ADD COLUMN     "downpayment" TEXT NOT NULL;
