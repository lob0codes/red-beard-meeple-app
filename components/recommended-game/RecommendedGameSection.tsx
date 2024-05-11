import classes from "@/components/recommended-game/RecommendedGameSection.module.css";
import { getGamesIncludingThumbnailImage } from "@/lib/games";

import RecommendedGame from "@/components/recommended-game/RecommendedGame";
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
      <h2 className={classes.header}>Recommended Games</h2>
      <div className={classes.content}>
        <Carousel className={classes.carousel}>
          <CarouselContent className={classes["carousel-content"]}>
            {games.map((game) => (
              <CarouselItem key={game.id} className={classes["carousel-item"]}>
                <RecommendedGame
                  gameId={game.id}
                  title={game.name}
                  description={game.description}
                  image={game.images[0].path}
                ></RecommendedGame>
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
