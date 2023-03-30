/*
  Warnings:

  - You are about to drop the column `idenntity` on the `_owners` table. All the data in the column will be lost.
  - Added the required column `identity` to the `_owners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "_owners" DROP COLUMN "idenntity",
ADD COLUMN     "identity" TEXT NOT NULL;
