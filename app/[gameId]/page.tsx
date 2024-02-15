import { getGame } from "@/lib/games";
import Image from "next/image";

export default async function GameDetailsPage({
  params,
}: {
  params: { gameId: string };
}) {
  const gameData = await getGame(Number(params.gameId));

  if (gameData) {
    const imageUrl = gameData.image;
    return (
      <div className="block container">
        <section className="game-details">
          <div className="game-details__main-image">
            <Image src={imageUrl} alt="test" fill />
          </div>
        </section>
      </div>
    );
  }
}
