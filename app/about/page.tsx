import Image from "next/image";
import aboutImage from "@/public/images/lord-of-the-rings-wallpaper.jpg";
import classes from "@/app/about/page.module.css";

export default function AboutPage() {
  return (
    <article className={`block container ${classes["about-us"]}`}>
      <header className={classes.header}>
        <h1>Who are we?</h1>
        <p>
          We are a group of people that enjoy playing board games and would like
          to share this passion to people with the same feelings or maybe make
          someone fall in love with playing board games and spending time with
          friends!
        </p>
      </header>
      <div className={classes["image-container"]}>
        <Image
          src={aboutImage}
          alt="Lord of the rings background image."
          fill
          objectFit="cover"
        />
      </div>
    </article>
  );
}
