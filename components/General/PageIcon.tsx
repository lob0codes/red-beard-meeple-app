import classes from "@/components/general/PageIcon.module.css";
import webpageIcon from "@/public/images/webpage_icon.png";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PageIcon({ className }: { className?: string }) {
  return (
    <div className={cn(className || "", classes["image-container"])}>
      <Image
        src={webpageIcon}
        alt="Webpage Icon."
        className={classes.icon}
        fill
        objectFit="cover"
      />
    </div>
  );
}
