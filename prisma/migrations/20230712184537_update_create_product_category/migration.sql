/*
  Warnings:

  - You are about to drop the column `id_category` on the `_products` table. All the data in the column will be lost.
  - You are about to drop the `_subCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_products" DROP CONSTRAINT "_products_id_category_fkey";

-- DropForeignKey
ALTER TABLE "_subCategories" DROP CONSTRAINT "_subCategories_id_Category_fkey";

-- AlterTable
ALTER TABLE "_products" DROP COLUMN "id_category";

-- DropTable
DROP TABLE "_subCategories";

-- CreateTable
CREATE TABLE "_products_categories" (
    "id" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_products_categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "_products_categories" ADD CONSTRAINT "_products_categories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products_categories" ADD CONSTRAINT "_products_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
