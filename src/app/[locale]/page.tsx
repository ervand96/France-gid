"use client";

import { useTranslations } from "next-intl";
import HeroSection from "@/app/shared/HeroSection";
import Header from "@/app/shared/Header";
import { excursionsData } from "@/constants/excursionData";
import Card from "@/app/shared/Card";
import Container from "@/app/shared/Container";
import Button from "@/app/shared/Button";

export default function Home() {
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
              <Header blockStyles="items-center" isDark={true} heading="Рекомендуемые экскурсии" subHeading="Экскурсионные программы, которые откроют для вас подлинный Париж, его пригороды и остальную Францию, выходящие за рамки туристических маршрутов." subHeadingStyles="text-center" />
              <div className="flex flex-wrap justify-center items-center gap-x-[24px] gap-y-[40px] my-[64px]">
                {excursionsData && excursionsData.map((elm) => {

                  return <Card
                    key={elm.id}
                    stylesOfCard="relative w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] flex flex-col items-start justify-end gap-[8px] p-[12px] lg:p-[24px] cursor-pointer group transition-all duration-500"
                    bgImage={elm.img}
                    primaryText={t(elm.key)}
                    primaryTextStyles="text-[16px] lg:text-[24px] font-[500] leading-[120%] text-secondary group-hover:underline transition-all duration-500"
                    textBlockStyles="w-full flex flex-col lg:flex-row justify-between lg:items-center items-start gap-y-[8px]"
                    secondaryText={`📅 ${elm.duration}`}
                    secondaryTextStyles="text-[14px] font-[400] leading-[143%] text-secondary group-hover:underline transition-all duration-500"
                    description={elm.category}
                    descriptionStyles="text-[11px] font-[600] leading-[143%] text-accent bg-secondary rounded-md px-[5px] py-[2px] group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-500"
                  ><span className="absolute w-8 h-8 flex justify-center items-center top-[14px] right-[14px] text-[24px] rounded-full group-hover:text-primary group-hover:bg-secondary/20 transition-all duration-500">
                      &#10095;
                    </span></Card>
                })}
              </div>
              <Button
                text="Просмотреть все экскурсии"
                styles="min-w-[255px] px-[40px] py-[18px] text-secondary text-[16px] leading-[150%] font-[600] bg-primary rounded-[6px] hover:bg-primary/50 transition-all duration-500"
                onClick={() => console.log("aaa")}
              />
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
