/*
  Warnings:

  - Added the required column `avatar` to the `_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "_users" ADD COLUMN     "avatar" TEXT NOT NULL;
