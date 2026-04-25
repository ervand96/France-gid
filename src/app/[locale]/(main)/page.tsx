"use client";

import { useTranslations } from "next-intl";
import HeroSection from "@/app/shared/HeroSection";
import Header from "@/app/shared/Header";
import Container from "@/app/shared/Container";
import CategoryCards from "@/app/shared/category";
import AboutGuideSection from "@/app/shared/AboutGuideSection";

export default function Home() {
  const t = useTranslations("HeroSection");

  return (
    <div>
      <HeroSection
        heading={t("ExperienceParis")}
        coloredPart={t("LikeNeverBefore")}
        subHeading={t("ExclusiveGuided")}
      />

      <section className="bg-white py-[100px]">
        <Container>
          <div className="flex flex-col items-center">
            <Header
              blockStyles="items-center mb-[50px]"
              heading={t("RecommendedExcursions")}
              subHeading={t("ExcursionsThatWillReveal")}
              isDark
              subHeadingStyles="text-center"
            />
            <CategoryCards />
            <AboutGuideSection />
          </div>
        </Container>
      </section>
    </div>
  );
}
