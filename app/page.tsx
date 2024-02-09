import RecommendedGame from "@/components/RecommendedGame/RecommendedGame";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type RecommendedGame = {
  title: string;
  description: string;
};

const recommendedGames: RecommendedGame[] = [
  { title: "Uno", description: "It's the most awesome game ever." },
  { title: "Catan", description: "Its an interesting game." },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center m-10">
      <Carousel className="w-full max-w-7xl">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-2/7">
              <div className="p-1">
                <RecommendedGame
                  title="test"
                  description="test"
                ></RecommendedGame>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
