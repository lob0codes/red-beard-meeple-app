/*
  Warnings:

  - You are about to drop the column `gameImageGalleryId` on the `GameImage` table. All the data in the column will be lost.
  - You are about to drop the `GameImageGallery` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gameId` to the `GameImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GameImage" DROP CONSTRAINT "GameImage_gameImageGalleryId_fkey";

-- DropForeignKey
ALTER TABLE "GameImageGallery" DROP CONSTRAINT "GameImageGallery_gameId_fkey";

-- AlterTable
ALTER TABLE "GameImage" DROP COLUMN "gameImageGalleryId",
ADD COLUMN     "gameId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "GameImageGallery";

-- AddForeignKey
ALTER TABLE "GameImage" ADD CONSTRAINT "GameImage_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
