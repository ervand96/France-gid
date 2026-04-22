"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Button from "@/app/shared/Button";
import Container from "@/app/shared/Container";
import phoneIcon from "@/assets/elements/phone.png";
import Image from "next/image";
import scrollAnimation from "@/assets/elements/scroll.gif";
import { HeroProps } from "./type";

export default function HeroSection({
  generalStyles,
  heading,
  coloredPart,
  headingStyles,
  subHeading,
  subHeadingStyles,
}: HeroProps) {
  const t = useTranslations("HeroSection");

  const [hideScrollIcon, setHideScrollIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideScrollIcon(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[url('/paris-gif.gif')] bg-cover bg-center min-h-screen">
      <Container>
        <div
          className={`flex flex-col items-center justify-center min-h-screen gap-[48px] px-[10px] pt-[150px] ${generalStyles}`}
        >
          <div className="flex flex-col items-center justify-center text-center gap-[24px]">
            <h1
              className={`text-[36px] sm:text-[48px] lg:text-[96px] font-[500] leading-[110%] text-secondary ${headingStyles}`}
              style={{ fontFamily: "Oswald" }}
            >
              {heading}
              <br />
              <span className="text-accent">{coloredPart}</span>
            </h1>
            <h2
              className={`max-w-[700px] lg:text-[22px] text-[18px] font-[400] leading-[150%] text-secondary ${subHeadingStyles}`}
            >
              {subHeading}
            </h2>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-[16px]">
            <Button
              text={t("BookATour")}
              styles="min-w-[255px] px-[40px] py-[18px] text-primary text-[16px] leading-[150%] font-[600] bg-accent border-[2px] border-accent rounded-[6px] hover:bg-accent/50 hover:text-[#fff] transition-all duration-500"
              onClick={() => console.log("aaa")}
            />
            <Button
              styles="min-w-[255px] flex justify-center items-center gap-[8px] px-[40px] py-[18px] text-secondary text-[16px] leading-[150%] font-[600] border-[2px] border-secondary rounded-[6px] hover:bg-primary hover:border-primary transition-all duration-500"
              onClick={() => console.log("aaa")}
            >
              <Image src={phoneIcon} alt="Phone icon" width={20} height={20} />
              <p>{t("ContactUs")}</p>
            </Button>
          </div>
          <Image
            src={scrollAnimation}
            alt="Scrolling animation gif"
            width={50}
            className={`absolute bottom-[5px] left-1/2 -translate-x-1/2 transition-opacity duration-700 ${hideScrollIcon ? "opacity-0" : "opacity-100"}`}
          />
        </div>
      </Container>
    </section>
  );
}
