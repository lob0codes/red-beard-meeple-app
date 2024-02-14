import { getGame } from "@/lib/games";
import Image from "next/image";

export default async function GameDetailsPage({
  params,
}: {
  params: { gameId: string };
}) {
  console.log(params.gameId);
  const gameData = await getGame(Number(params.gameId));

  return (
    <div className="block container">
      <section className="game-details">
        <div className="game-details__main-image"></div>
        {/* <Image src={}/> */}
      </section>
    </div>
  );
}
