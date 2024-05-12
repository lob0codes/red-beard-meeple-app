import classes from "@/components/Footer/Footer.module.css";
import FooterStartupSection from "@/components/Footer/FooterStartupSection";
import FooterSocialMediaSection from "@/components/Footer/FooterSocialMediaSection";
import PageIcon from "@/components/general/PageIcon";

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
