import Link from "next/link";
import { MoveRight } from "lucide-react";
import classes from "@/components/RecommendedGame/LinkArrow.module.css";

export default function LinkArrow({ href }: { href: string }) {
  return (
    <Link href={href} className={classes["link-arrow"]}>
      <p>Learn More</p>
      <MoveRight className={classes["link-arrow__icon"]} />
    </Link>
  );
}
