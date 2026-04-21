import HeroSection from "@/app/shared/HeroSection";
import React from "react";
import clockIcon from "@/assets/details/clock.png"
import groupIcon from "@/assets/details/group.png"
import calendarIcon from "@/assets/details/calendar.png"
import Card from "@/app/shared/Card";
import Container from "@/app/shared/Container";
import AsideCard from "@/app/features/AsideCard";

export default function ExcursionsInParis() {

  const array = [{ "value": "7", "image": clockIcon, "text": "Duration" }, { "value": "2-12", "image": groupIcon, "text": "Group Size" }, { "value": "May 15", "image": calendarIcon, "text": "Next Tour" }]

  return <div className="bg-secondary">
    <HeroSection />
    <Container>
      <div className="flex justify-between items-start my-[100px]">

        <div className="flex gap-[24px] ">
          {array.map((elm, index) => {
            return <Card key={index} stylesOfCard="flex flex-col gap-[12px] items-center justify-center bg-accent/10 px-[96px] py-[24px] rounded-[10px]" img={elm.image} imageAltText="Card Icon" imgStyles="w-[32px] h-[32px]" textBlockStyles="flex flex-col gap-[4px] items-center justify-center" secondaryText={elm.value} secondaryTextStyles="text-[24px] font-[400] leading-[133%] text-primary" description={elm.text} descriptionStyles="text-[14px] font-[400] leading-[143%] text-primary/50" />
          })}
        </div>
        <AsideCard />

      </div>
    </Container>

  </div>;
}
