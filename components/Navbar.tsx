import classes from "@/components/Navbar.module.css";
import Image from "next/image";
import webpageIcon from "@/assets/webpage_icon.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <Image
        className={classes.icon}
        src={webpageIcon}
        alt="webpage icon"
      ></Image>
      <ul className={classes.nav__list}>
        <li className={`${classes["a--gray-transition"]} ${classes.nav__item}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={`${classes["a--gray-transition"]} ${classes.nav__item}`}>
          <Link href={"/"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
