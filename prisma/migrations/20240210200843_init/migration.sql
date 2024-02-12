-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
