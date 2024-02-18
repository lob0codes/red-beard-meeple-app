import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import classes from "@/app/test-scroll-area/page.module.css";
import { getGameImagesByType } from "@/lib/games";

export default async function GameGallery() {
  const gallery = await getGameImagesByType(2, "thumbnail");

  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        <div className={classes.square1}></div>
        <div className={classes.square2}></div>
        <div className={classes.square3}></div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
