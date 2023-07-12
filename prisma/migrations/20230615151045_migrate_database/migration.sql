/*
  Warnings:

  - Made the column `isOffer` on table `_products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `starRating` on table `_products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timestamp` on table `_products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "_products" ALTER COLUMN "isOffer" SET NOT NULL,
ALTER COLUMN "starRating" SET NOT NULL,
ALTER COLUMN "timestamp" SET NOT NULL;
