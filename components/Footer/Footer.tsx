import classes from "@/components/footer/Footer.module.css";
import FooterStartupSection from "@/components/footer/FooterStartupSection";
import FooterSocialMediaSection from "@/components/footer/FooterSocialMediaSection";
import PageIcon from "../general/PageIcon";

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
