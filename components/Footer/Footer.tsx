import Image from "next/image";
import classes from "@/components/Footer/Footer.module.css";
import FooterStartupSection from "./FooterStartupSection";
import FooterSocialMediaSection from "./FooterSocialMediaSection";
import PageIcon from "../General/PageIcon";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.icon}>
        <PageIcon />
      </div>
      <div className={classes.content}>
        <FooterStartupSection />
        <FooterSocialMediaSection />
      </div>
    </footer>
  );
}
