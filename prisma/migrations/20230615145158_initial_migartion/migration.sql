/*
  Warnings:

  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_categories" DROP CONSTRAINT "_categories_id_subCategory_fkey";

-- DropTable
DROP TABLE "SubCategory";

-- CreateTable
CREATE TABLE "_subCategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_subCategories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "_subCategories_name_key" ON "_subCategories"("name");

-- AddForeignKey
ALTER TABLE "_categories" ADD CONSTRAINT "_categories_id_subCategory_fkey" FOREIGN KEY ("id_subCategory") REFERENCES "_subCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
