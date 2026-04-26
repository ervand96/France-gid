"use client";

import Link from "next/link";
import { ImageWithFallback } from "../imageWithFallback/imageWithFallback";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, LucideIcon } from "lucide-react";
import Container from "../Container";
import Header from "../Header";
import { AboutData } from "@/constants/aboutData";
import cuteSmile from "@/assets/about/cuteSmile.jpg";
import smile from "@/assets/about/smile.jpg";


export default function AboutGuideSection() {

  const locale = useLocale();

  const t = useTranslations("About")

  type Props = {
    value: number | string;
    label: string;
    icon: LucideIcon;
  };

  const AboutCard = ({ value, label, icon: Icon }: Props) => {
    return (
      <div className="flex-1 flex flex-col items-center bg-secondary rounded-xl p-2 md:p-6 md:w-[160px] text-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-14 h-14 md:mx-auto md:mb-4 bg-accent/10 flex items-center justify-center rounded-xl">
          <Icon className="w-6 h-6 text-yellow-600" />
        </div>
        <div className="text-[28px] font-bold text-dark-gray mb-1">
          {value}
        </div>
        <div className="text-[14px] text-gray-transparent">
          {label}
        </div>
      </div>
    );
  };


  return (
    <Container>
      <section className="w-full py-[100px] grid md:grid-cols-7 gap-12 items-start">

        <div className="flex flex-col gap-[30px] items-start md:col-span-4">
          <Header heading={t("AboutGuide")} subHeading={t("YourGuide")} isDark={true} />

          <div className="md:hidden relative rounded-2xl overflow-hidden border-4 border-secondary shadow-xl">
            <ImageWithFallback
              src={cuteSmile}
              alt="guide"
              width={10000}
              height={100}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"

            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 text-secondary text-xl font-semibold">
              {t("Name")}
            </div>
          </div>

          <div className="flex flex-col gap-[20px] px-[10px] text-gray-transparent text-[16px] leading-[170%]">
            <p>
              {t("Greeting")} <b>{t("Name")}</b>, {t("Over12Years")}</p>
            <p>
              {t("OverTheYears")} <b>{t("Atmoshpere")}</b>, {t("ItsHistory")}
            </p>
            <p>{t("InLoveWithParis")}
            </p>
          </div>

          <div className="w-full flex flex-row justify-between gap-2 md:gap-6 px-[10px]">

            {AboutData && AboutData.map((item, index) => {
              return <AboutCard
                key={index}
                value={item.title}
                label={t(item.subTitle)}
                icon={item.icon} />
            })}

          </div>

          <Link href={`${locale}/about-us`} className="group inline-flex items-center gap-2 px-6 py-3 ml-[10px] bg-accent hover:bg-accent/50 text-secondary font-semibold rounded-lg transition-all">
            {t("FindOutMore")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>

        <div className="hidden md:block space-y-8 pr-[10px] md:col-span-3">

          <div className="relative rounded-2xl overflow-hidden border-4 border-secondary shadow-xl">
            <ImageWithFallback
              src={cuteSmile}
              alt="guide"
              width={10000}
              height={100}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"

            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 text-secondary text-xl font-semibold">
              {t("Name")}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="relative rounded-2xl overflow-hidden border-4 border-secondary shadow-lg">
              <ImageWithFallback
                src={smile}
                alt="paris"
                width={10000}
                height={100}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"

              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="relative rounded-2xl overflow-hidden border-4 border-secondary shadow-lg">
              <ImageWithFallback
                src={smile}
                alt="paris"
                width={10000}
                height={100}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </Container >

  );
}