import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import classes from "@/app/test-scroll-area/page.module.css";
import { getGameImagesByType } from "@/lib/games";
import Image from "next/image";

export default async function GameGallery() {
  const gallery: string[] = await getGameImagesByType(2, "gallery");

  return (
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
  );
}
