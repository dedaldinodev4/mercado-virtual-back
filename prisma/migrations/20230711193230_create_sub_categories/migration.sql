/*
  Warnings:

  - Added the required column `id_Category` to the `_subCategories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_categories" DROP CONSTRAINT "_categories_id_subCategory_fkey";

-- AlterTable
ALTER TABLE "_subCategories" ADD COLUMN     "id_Category" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "_subCategories" ADD CONSTRAINT "_subCategories_id_Category_fkey" FOREIGN KEY ("id_Category") REFERENCES "_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
