/*
  Warnings:

  - Added the required column `restaurant` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "restaurant" TEXT NOT NULL;
