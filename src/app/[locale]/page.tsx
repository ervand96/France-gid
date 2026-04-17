"use client";

import HeroSection from "@/app/shared/HeroSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <HeroSection
        heading={t("title")}
        coloredPart="Like Never Before"
        subHeading="Exclusive guided tours revealing the hidden soul of the City of Light. Authentic experiences crafted for discerning travelers."
      />
    </div>
  );
}
