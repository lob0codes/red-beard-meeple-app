import classes from "@/components/RecommendedGame/RecommendedGame.module.css";
import Image from "next/image";
import LinkArrow from "./LinkArrow";

export default function RecommendedGame({
  title,
  description,
  gameId,
  image,
}: {
  title: string;
  description: string | null;
  gameId: number;
  image: string;
}) {
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
