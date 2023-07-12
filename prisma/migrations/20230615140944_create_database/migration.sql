/*
  Warnings:

  - Added the required column `id_subCategory` to the `_categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOffer` to the `_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starRating` to the `_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamp` to the `_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "_categories" ADD COLUMN     "id_subCategory" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "_products" ADD COLUMN     "isOffer" BOOLEAN NOT NULL,
ADD COLUMN     "starRating" INTEGER NOT NULL,
ADD COLUMN     "timestamp" INTEGER NOT NULL,
ALTER COLUMN "ends_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_name_key" ON "SubCategory"("name");

-- AddForeignKey
ALTER TABLE "_categories" ADD CONSTRAINT "_categories_id_subCategory_fkey" FOREIGN KEY ("id_subCategory") REFERENCES "SubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
