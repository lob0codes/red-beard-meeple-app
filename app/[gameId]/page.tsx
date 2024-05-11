import classes from "@/app/[gameId]/page.module.css";
import GameDetails from "@/components/game-details/GameDetails";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { getGame, getGameImagesByType } from "@/lib/games";
import Image from "next/image";

export default async function GameDetailsPage({
  params,
}: {
  params: { gameId: string };
}) {
  return (
    <main className={classes.page}>
      <GameDetails gameId={Number(params.gameId)} />
    </main>
  );
}
