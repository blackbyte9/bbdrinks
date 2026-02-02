/*
  Warnings:

  - You are about to drop the `Shopinglist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Shopinglist";

-- CreateTable
CREATE TABLE "Shoppinglist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "user" TEXT NOT NULL DEFAULT 'nobody',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shoppinglist_pkey" PRIMARY KEY ("id")
);
