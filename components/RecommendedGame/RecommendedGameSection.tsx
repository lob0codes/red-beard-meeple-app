import classes from "@/components/RecommendedGame/RecommendedGameSection.module.css";
import { getGamesIncludingThumbnailImage } from "@/lib/games";

import RecommendedGame from "@/components/RecommendedGame/RecommendedGame";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default async function RecommendedGameSection() {
  const games = await getGamesIncludingThumbnailImage();

  return (
    <div className={cn("block container", classes["recommended-game-section"])}>
      <h2 className={classes["recommended-game-section__header"]}>
        Recommended Games
      </h2>
      <div className={classes["recommended-game-section__content"]}>
        <Carousel className="w-full max-w-7xl">
          <CarouselContent>
            {games.map((game) => (
              <CarouselItem key={game.id} className="basis-2/7">
                <div className="p-1">
                  <RecommendedGame
                    gameId={game.id}
                    title={game.name}
                    description={game.description}
                    image={game.images[0].path}
                  ></RecommendedGame>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
