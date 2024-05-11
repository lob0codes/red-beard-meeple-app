import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export function getGames() {
  const allGames = db.game.findMany();
  return allGames;
}

export function getGamesIncludingThumbnailImage() {
  const allGames = db.game.findMany({
    include: { images: { where: { type: "thumbnail" } } },
  });
  return allGames;
}

export async function getGame(id: number) {
  const game = await db.game.findUnique({ where: { id: id } });
  return game;
}

export async function getGameImagesByType(gameId: number, imageType: string) {
  const images = await db.gameImage.findMany({
    where: { gameId: gameId, type: imageType },
    select: { path: true },
  });

  if (images.length === 0) {
    return "";
  } else {
    const imagesPaths: string[] = images.map((image) => image.path);
    return imagesPaths;
  }
}
