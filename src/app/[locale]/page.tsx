"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import HeroSection from "@/app/shared/HeroSection";
import Header from "@/app/shared/Header";
import Card from "@/app/shared/Card";
import Container from "@/app/shared/Container";
import Button from "@/app/shared/Button";
import GetInTouch from "../shared/getInTouch";
import { excursionsData } from "@/constants/excursionData";

export default function Home() {
  const initialCount = 8;
  const [showAllCards, setShowAllCards] = useState(false)
  const visibleCardsCount = showAllCards ? excursionsData : excursionsData.slice(0, initialCount)

  const t = useTranslations("HeroSection");
  return (
    <div>
      <HeroSection
        heading={t("ExperienceParis")}
        coloredPart={t("LikeNeverBefore")}
        subHeading={t("ExclusiveGuided")}
      />
      <div>
        <section className="bg-white py-[100px]">
          <Container>
            <div className="flex flex-col items-center">
              <Header blockStyles="items-center" isDark={true} heading={t("RecommendedExcursions")} subHeading={t("ExcursionsThatWillReveal")} subHeadingStyles="text-center" />
              <div className="flex flex-wrap justify-center items-center gap-x-[24px] gap-y-[40px] my-[64px]">
                {excursionsData && visibleCardsCount.map((elm) => {

                  return <div key={elm.id} className="shadow-xl/50 rounded-lg group">
                    <Card
                      stylesOfCard="relative w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] rounded-lg flex flex-col items-start justify-end gap-[8px] p-[12px] lg:p-[24px] cursor-pointer group transition-all duration-500 hover:scale-110"
                      bgImage={elm.img}
                      primaryText={t(elm.key)}
                      primaryTextStyles="text-[16px] lg:text-[24px] font-[500] leading-[120%] text-secondary transition-all duration-500"
                      textBlockStyles="w-full flex flex-col lg:flex-row justify-between lg:items-center items-start gap-y-[8px]"
                      secondaryText={`📅 ${elm.duration}`}
                      secondaryTextStyles="text-[14px] font-[400] leading-[143%] text-secondary transition-all duration-500"
                      description={t(elm.category)}
                      descriptionStyles="text-[11px] font-[600] leading-[143%] text-accent bg-secondary rounded-md px-[5px] py-[2px] group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-500"
                    >
                      <span className="absolute w-8 h-8 flex justify-center items-center top-[14px] right-[14px] text-[24px] rounded-full group-hover:text-primary group-hover:bg-secondary/20 transition-all duration-500">
                        &#10095;
                      </span>
                    </Card>
                  </div>
                })}
              </div>
              {
                visibleCardsCount.length >= initialCount && (
                  <Button
                    text={showAllCards ? t("ShowLess") : t("ShowMore")}
                    styles="min-w-[255px] px-[40px] py-[18px] text-secondary text-[16px] leading-[150%] font-[600] bg-primary rounded-[6px] hover:bg-primary/50 transition-all duration-500"
                    onClick={() => setShowAllCards(!showAllCards)}
                  />
                )
              }
            </div>
          </Container>
        </section>
      </div>
      <GetInTouch />
    </div>
  );
}
