/*
  Warnings:

  - You are about to drop the column `idenntity` on the `_customers` table. All the data in the column will be lost.
  - You are about to drop the column `id_payment` on the `_payments_types` table. All the data in the column will be lost.
  - Added the required column `identity` to the `_customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "_customers" DROP COLUMN "idenntity",
ADD COLUMN     "identity" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "_payments_types" DROP COLUMN "id_payment";
