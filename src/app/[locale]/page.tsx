"use client";

import HeroSection from "@/app/shared/HeroSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HeroSection");
  return (
    <div>
      <HeroSection
        heading={t("ExperienceParis")}
        coloredPart={t("LikeNeverBefore")}
        subHeading={t("ExclusiveGuided")}
      />
    </div>
  );
}
