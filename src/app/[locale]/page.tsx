import { getTranslations } from "next-intl/server";

import HeroSection from "@/app/shared/HeroSection";
import Header from "@/app/shared/Header";
import Container from "@/app/shared/Container";
import NewStrapiCard from "../features/newStrapiCard";
import GetInTouch from "@/app/shared/getInTouch";
import CallToAction from "@/app/features/CallToAction";
import CategoryCards from "@/app/shared/category";

export default async function Home({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const t = await getTranslations("HeroSection");

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
              blockStyles="items-center"
              heading={t("RecommendedExcursions")}
              subHeading={t("ExcursionsThatWillReveal")}
              isDark
              subHeadingStyles="text-center"
            />
            <CategoryCards />
          </div>
        </Container>
      </section>

      <CallToAction />
      <GetInTouch />
    </div>
  );
}