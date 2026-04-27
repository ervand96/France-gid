"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import HeroSection from "@/app/shared/HeroSection";
import Header from "@/app/shared/Header";
import Container from "@/app/shared/Container";
import CategoryCards from "@/app/shared/category";
import AboutGuideSection from "@/app/shared/AboutGuideSection";
import ContactModal from "@/app/shared/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const t = useTranslations("HeroSection");

  return (
    <div>
      <HeroSection
        heading={t("ExperienceParis")}
        coloredPart={t("LikeNeverBefore")}
        subHeading={t("ExclusiveGuided")}
        onContactClick={() => setIsContactOpen(true)}
      />

      <section className="bg-white py-[100px]">
        <Container>
          <div className="flex flex-col items-center">
            <Header
              blockStyles="text-center items-center mb-[50px]"
              heading={t("RecommendedExcursions")}
              subHeading={t("ExcursionsThatWillReveal")}
              isDark
            />
            <CategoryCards />
            <AboutGuideSection onContactClick={() => setIsContactOpen(true)} />
          </div>
        </Container>
      </section>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
