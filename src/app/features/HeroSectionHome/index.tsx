"use client";

import Header from "@/app/shared/Header";
import HeroSection from "@/app/shared/HeroSection";
import { useTranslations } from "next-intl";
import React from "react";

export default function HeroSectionHome({
  isHero = false,
}: {
  isHero?: boolean;
}) {
  const t = useTranslations("HeroSection");

  return (
    <>
      {isHero ? (
        <HeroSection
          heading={t("ExperienceParis")}
          coloredPart={t("LikeNeverBefore")}
          subHeading={t("ExclusiveGuided")}
        />
      ) : (
        <Header
          blockStyles="text-center items-center mb-[50px]"
          heading={t("RecommendedExcursions")}
          subHeading={t("ExcursionsThatWillReveal")}
          isDark
        />
      )}
    </>
  );
}
