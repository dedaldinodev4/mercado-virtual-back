/*
  Warnings:

  - Added the required column `quantity` to the `_orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "_orders" ADD COLUMN     "quantity" INTEGER NOT NULL;
