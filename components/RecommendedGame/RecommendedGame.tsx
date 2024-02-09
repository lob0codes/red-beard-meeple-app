import classes from "@/components/RecommendedGame/RecommendedGame.module.css";
import Image from "next/image";
import wingspanImage from "@/assets/wingspan.webp";
import LinkArrow from "./LinkArrow";

export default function RecommendedGame({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className={classes["recommended-game"]}>
      <div className={classes["image-container"]}>
        <Image fill src={wingspanImage} alt="Recommended game image." />
      </div>

      <div className={classes["recommended-game__content"]}>
        <h3>{title}</h3>
        <p>{description}</p>
        <LinkArrow />
      </div>
    </article>
  );
}
