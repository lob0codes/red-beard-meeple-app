import classes from "@/app/[gameId]/page.module.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { getGame, getGameImagesByType } from "@/lib/games";
import Image from "next/image";

export default async function GameDetailsPage({
  params,
}: {
  params: { gameId: string };
}) {
  const gameData = await getGame(Number(params.gameId));

  if (gameData) {
    const thumbnailImageUrl = (
      await getGameImagesByType(gameData.id, "thumbnail")
    )[0];

    const gallery: string[] = await getGameImagesByType(2, "gallery");

    return (
      <div className="block container">
        <article className={classes["game-details"]}>
          <section className={classes["game-details__header"]}>
            <div className={classes["game-details__header__main-image"]}>
              <Image
                className="object-cover"
                src={thumbnailImageUrl}
                alt={gameData.name}
                fill
              />
            </div>
            <h2 className={classes["game-details__header__title"]}>
              {gameData.name}
            </h2>
            <p className={classes["game-details__header__description"]}>
              {gameData.description}
            </p>
          </section>
          <section className={classes["game-details__image-gallery"]}>
            <h2>Game Gallery</h2>
            <ScrollArea className={classes["scroll-area"]}>
              <div className="flex gap-10 p-4">
                {gallery.map((image) => (
                  <div key={image} className={classes["image-container"]}>
                    <Image src={image} alt="game-image" fill />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        </article>
      </div>
    );
  }
}
