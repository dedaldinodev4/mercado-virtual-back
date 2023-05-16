/*
  Warnings:

  - A unique constraint covering the columns `[identity]` on the table `_customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identity]` on the table `_owners` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "_customers_identity_key" ON "_customers"("identity");

-- CreateIndex
CREATE UNIQUE INDEX "_owners_identity_key" ON "_owners"("identity");
