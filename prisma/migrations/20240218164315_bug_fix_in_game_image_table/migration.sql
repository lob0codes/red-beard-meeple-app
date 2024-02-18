/*
  Warnings:

  - You are about to drop the column `imageId` on the `GameImage` table. All the data in the column will be lost.
  - Added the required column `gameImageGalleryId` to the `GameImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GameImage" DROP CONSTRAINT "GameImage_imageId_fkey";

-- AlterTable
ALTER TABLE "GameImage" DROP COLUMN "imageId",
ADD COLUMN     "gameImageGalleryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "GameImage" ADD CONSTRAINT "GameImage_gameImageGalleryId_fkey" FOREIGN KEY ("gameImageGalleryId") REFERENCES "GameImageGallery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
