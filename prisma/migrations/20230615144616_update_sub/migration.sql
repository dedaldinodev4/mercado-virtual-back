/*
  Warnings:

  - Made the column `ends_at` on table `_products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "_products" ALTER COLUMN "ends_at" SET NOT NULL,
ALTER COLUMN "ends_at" SET DEFAULT CURRENT_TIMESTAMP;
