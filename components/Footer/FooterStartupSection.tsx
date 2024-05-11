import Link from "next/link";
import classes from "@/components/footer/FooterStartupSection.module.css";

export default function FooterStartupSection() {
  return (
    <div>
      <h2 className={classes.heading}>STARTUP</h2>
      <ul className={`list ${classes.content}`}>
        <li>
          <Link href={"/about"} className="a--gray-transition">
            About
          </Link>
        </li>
        <li>
          <Link href={"/"} className="a--gray-transition">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
