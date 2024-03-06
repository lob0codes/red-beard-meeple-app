import classes from "@/components/Navbar.module.css";
import Link from "next/link";
import PageIcon from "./General/PageIcon";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <PageIcon />
      <ul className={classes.nav__list}>
        <li className={`a--gray-transition ${classes.nav__item}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={`a--gray-transition ${classes.nav__item}`}>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
