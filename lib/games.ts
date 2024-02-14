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

export async function getGame(id: number) {
  const game = await db.game.findUnique({ where: { id: id } });
  return game;
}
