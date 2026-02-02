-- CreateTable
CREATE TABLE "Shopinglist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "user" TEXT NOT NULL DEFAULT 'nobody',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shopinglist_pkey" PRIMARY KEY ("id")
);
