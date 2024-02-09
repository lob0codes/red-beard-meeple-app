import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import RecommendedGame from "@/components/RecommendedGame/RecommendedGame"

export default function CarouselSpacing() {
  return (

    
        <div className="flex items-center justify-center mt-10">
            <Carousel className="w-full max-w-2xl">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-6/12">
                    <div className="p-1">
                      <RecommendedGame title="test" description="test"></RecommendedGame>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
    
  )
}
