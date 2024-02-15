import classes from "@/components/Navbar.module.css";
import Image from "next/image";
import webpageIcon from "@/public/images/webpage_icon.png";
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
