import Image from "next/image";
import aboutImage from "@/public/images/lord-of-the-rings-wallpaper.jpg";
import classes from "@/components/About/About.module.css";

export default function About() {
  return (
    <article className={classes["about-us"]}>
      <section className={classes["about-us__content"]}>
        <h3>Who are we?</h3>
        <p>
          We are a group of people that enjoy playing board games and would like
          to share this passion to people with the same feelings or maybe make
          someone fall in love with playing board games and spending time with
          friends!
        </p>
      </section>
      <div className={classes["about-us__image"]}>
        <Image
          src={aboutImage}
          alt="Lord of the rings background image."
          fill
        />
      </div>
    </article>
  );
}
