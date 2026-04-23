"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/app/shared/Container";
import HeroSection from "@/app/shared/HeroSection";
import GetInTouch from "@/app/shared/getInTouch";
import Card from "@/app/shared/Card";
import AsideCard from "@/app/features/AsideCard";
import Header from "@/app/shared/Header";
import Gallery from "@/app/features/Gallery";
import clockIcon from "@/assets/details/clock.png";
import groupIcon from "@/assets/details/group.png";
import calendarIcon from "@/assets/details/calendar.png";
import placeholder from "@/assets/elements/placeholder.jpg";
import checkMark from "@/assets/elements/checkmark.png";
import redCircle from "@/assets/elements/redCircle.png";
import greenCircle from "@/assets/elements/greenCircle.png";
import { TourCard } from "lib/utils/tourCardType";

type Props = {
  tour: TourCard;
};

export default function TourDetail({ tour }: Props) {
  const t = useTranslations("DetailsPage");
  console.log(tour, "tour");

  const array = [
    { value: "7", image: clockIcon, text: t("Duration") },
    { value: "2-12", image: groupIcon, text: t("GroupSize") },
    { value: "May 15", image: calendarIcon, text: t("NextTour") },
  ];

  const arrayImg = [
    placeholder.src,
    placeholder.src,
    placeholder.src,
    placeholder.src,
    placeholder.src,
    placeholder.src,
  ];

  return (
    <div className="bg-secondary">
      <HeroSection />
      <Container>
        <div className="flex justify-between items-start my-[100px] gap-[48px]">
          <div className="flex flex-col gap-[50px]">
            <div className="flex gap-[24px] ">
              {array.map((elm, index) => {
                return (
                  <Card
                    key={index}
                    stylesOfCard="flex flex-col gap-[12px] items-center justify-center bg-secondary px-[96px] py-[24px] rounded-[10px] border border-accent"
                    img={elm.image}
                    imageAltText="Card Icon"
                    imgStyles="w-[32px] h-[32px]"
                    textBlockStyles="flex flex-col gap-[4px] items-center justify-center"
                    secondaryText={elm.value}
                    secondaryTextStyles="text-[24px] font-[400] leading-[133%] text-primary"
                    description={elm.text}
                    descriptionStyles="text-[14px] font-[400] leading-[143%] text-primary/50"
                  />
                );
              })}
            </div>
            <Header
              isDark={true}
              heading={t("TourOverview")}
              subHeading={t("EmbarkOn")}
            />

            <Gallery images={arrayImg} />

            <div>
              <Header isDark={true} heading={t("TourHighlights")} />
              <ul className="grid grid-cols-2 gap-[16px]">
                <li className="flex items-center gap-[16px]">
                  <Image
                    src={checkMark}
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                    Eiffel Tower & Seine River cruise
                  </p>
                </li>
                <li className="flex items-center gap-[16px]">
                  <Image
                    src={checkMark}
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                    Lavender fields of Provence
                  </p>
                </li>
                <li className="flex items-center gap-[16px]">
                  <Image
                    src={checkMark}
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                    Visit to Versailles Palace
                  </p>
                </li>
                <li className="flex items-center gap-[16px]">
                  <Image
                    src={checkMark}
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                    Local market experiences
                  </p>
                </li>
                <li className="flex items-center gap-[16px]">
                  <Image
                    src={checkMark}
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                    Wine tasting in Burgundy
                  </p>
                </li>
                <li className="flex items-center gap-[16px]">
                  <Image
                    src={checkMark}
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                    Cooking class with local chef
                  </p>
                </li>
                <li className="flex items-center gap-[16px]">
                  <Image
                    src={checkMark}
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                    Charming village explorations
                  </p>
                </li>
                <li className="flex items-center gap-[16px]">
                  <Image
                    src={checkMark}
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                    French gastronomy tour
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <Header isDark={true} heading={t("Included")} />
              <div className="flex justify-start items-start">
                <div className="flex-1 flex flex-col items-start gap-[24px]">
                  <h6 className="text-[18px] font-[500] leading-[156%] text-[#008236]">
                    Included
                  </h6>
                  <ul className="flex flex-col gap-[16px]">
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={greenCircle}
                        alt="Green circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        6 nights accommodation
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={greenCircle}
                        alt="Green circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        Daily breakfast & 4 dinners
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={greenCircle}
                        alt="Green circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        All entrance fees
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={greenCircle}
                        alt="Green circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        Expert local guide
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={greenCircle}
                        alt="Green circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        Private transportation
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={greenCircle}
                        alt="Green circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        Airport transfers
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 flex flex-col items-start gap-[24px]">
                  <h6 className="text-[18px] font-[500] leading-[156%] text-[#c10007]">
                    Not Included
                  </h6>
                  <ul className="flex flex-col gap-[16px]">
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={redCircle}
                        alt="Red circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        International flights
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={redCircle}
                        alt="Red circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        Travel insurance
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={redCircle}
                        alt="Red circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        Personal expenses
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Image
                        src={redCircle}
                        alt="Red circle icon"
                        width={10}
                        height={10}
                      />
                      <p className="text-[16px] font-[400] leading-[150%] text-primary/70">
                        Tips and gratuities
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-[100px]">
            <AsideCard />
          </div>
        </div>
      </Container>
      <GetInTouch />
    </div>
  );
}
