import classes from "@/components/Footer/FooterSocialMediaSection.module.css";
import footerClasses from "@/components/Footer/Footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function FooterSocialMediaSection() {
  return (
    <div className={classes["social-media-banner"]}>
      <h2 className={footerClasses.footer__section__heading}>CONNECT</h2>
      <div className={footerClasses.footer__section__content}>
        <div className={classes["social-media-banner__icon"]}>
          <Link
            href={"https://www.instagram.com/red_beard_meeple/"}
            className="a--gray-transition"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
