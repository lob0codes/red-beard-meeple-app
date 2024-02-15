import Image from "next/image";
import webpageIcon from "@/public/images/webpage_icon.png";
import classes from "@/components/Footer/Footer.module.css";
import FooterStartupSection from "./FooterStartupSection";
import FooterSocialMediaSection from "./FooterSocialMediaSection";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Image src={webpageIcon} alt="Webpage Icon." className={classes.icon} />
      <FooterStartupSection />
      <FooterSocialMediaSection />
    </footer>
  );
}
