/*
  Warnings:

  - You are about to drop the column `image` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "image";

-- CreateTable
CREATE TABLE "GameImageGallery" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "GameImageGallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameImage" (
    "id" SERIAL NOT NULL,
    "path" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "GameImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameImageGallery_gameId_key" ON "GameImageGallery"("gameId");

-- AddForeignKey
ALTER TABLE "GameImageGallery" ADD CONSTRAINT "GameImageGallery_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameImage" ADD CONSTRAINT "GameImage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "GameImageGallery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
