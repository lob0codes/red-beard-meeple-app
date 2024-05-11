import classes from "@/components/recommended-game/RecommendedGame.module.css";
import Image from "next/image";
import LinkArrow from "@/components/recommended-game/LinkArrow";

interface RecommendedGameProps {
  title: string;
  description: string;
  gameId: number;
  image: string;
}

export default function RecommendedGame({
  title,
  description,
  gameId,
  image,
}: RecommendedGameProps) {
  return (
    <article className={classes["recommended-game"]}>
      <div className={classes["image-container"]}>
        <Image
          fill
          objectFit="cover"
          src={image}
          alt="Recommended game image."
        />
      </div>

      <div className={classes["recommended-game__content"]}>
        <h3>{title}</h3>
        <p>{description}</p>
        <LinkArrow href={`/${gameId}`} />
      </div>
    </article>
  );
}
