import classes from "@/components/game-details/GameDetails.module.css";

import { getGame, getGameImagesByType } from "@/lib/games";
import Image from "next/image";
import GameGallery from "@/components/game-details/GameGallery";
import Comments from "@/components/game-details/CommentList";

export default async function GameDetails({ gameId }: { gameId: number }) {
  const gameData = await getGame(gameId);

  let thumbnailImageUrl = "";
  if (gameData) {
    thumbnailImageUrl = (
      await getGameImagesByType(gameData.id, "thumbnail")
    )[0];
  } else {
    return <p>No data</p>;
  }

  return (
    <article className={classes["game-details"]}>
      <header className={classes["header"]}>
        <div className={classes["header__image-container"]}>
          <Image
            className={classes.header__image}
            src={thumbnailImageUrl}
            alt={gameData.name}
            fill
          />
        </div>
        <section className={classes["header__presentation"]}>
          <h2 className={classes["header__title"]}>{gameData.name}</h2>
          <p className={classes["header__description"]}>
            {gameData.description}
          </p>
        </section>
      </header>
      <main className={classes["main"]}>
        <GameGallery gameId={gameId} />
        <Comments />
      </main>
    </article>
  );
}
