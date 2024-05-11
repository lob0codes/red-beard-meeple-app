import classes from "@/components/game-details/GameGallery.module.css";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getGameImagesByType } from "@/lib/games";
import { Frown } from "lucide-react";

import Image from "next/image";

export default async function GameGallery({ gameId }: { gameId: number }) {
  const gallery: string[] | "" = await getGameImagesByType(gameId, "gallery");

  return (
    <article className={classes["game-gallery"]}>
      <h3>Game Gallery</h3>
      {gallery === "" ? (
        <div className={classes["no-images"]}>
          <p>No gallery photos added for this game yet!!!</p>
          <Frown />
        </div>
      ) : (
        <ScrollArea className={classes["scroll-area"]}>
          <div className="flex gap-10 p-4">
            {gallery.map((image) => (
              <div key={image} className={classes["image-container"]}>
                <Image
                  className={classes.image}
                  src={image}
                  alt="game-image"
                  fill
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </article>
  );
}
