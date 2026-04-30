"use client";
import { Star, LucideIcon } from "lucide-react";
import { ImageWithFallback } from "@/app/shared/imageWithFallback/imageWithFallback";
import Header from "@/app/shared/Header";
import { AboutData } from "@/constants/aboutData";
import cuteSmile from "@/assets/about/cuteSmile.jpg";
import { useTranslations } from "next-intl";

type Props = {
  value: number | string;
  label: string;
  icon: LucideIcon;
};

const AboutCard = ({ value, label, icon: Icon }: Props) => {
  return (
    <div className="flex-1 flex flex-col items-center bg-secondary/10 rounded-xl p-2 md:p-6 md:w-[160px] text-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-14 h-14 md:mx-auto md:mb-4 bg-accent/10 flex items-center justify-center rounded-xl">
        <Icon className="w-6 h-6 text-yellow-600" />
      </div>
      <div className="text-[28px] font-bold text-dark-gray mb-1">{value}</div>
      <div className="text-[14px] text-gray-transparent">{label}</div>
    </div>
  );
};

export default function AboutHero() {
  const t = useTranslations("About");

  return (
    <section className="py-[50px]">
      <div className="relative mx-auto px-[10px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Header
              heading={t("Name")}
              headingStyles="text-5xl md:text-6xl font-[900]"
              subHeading={"aaa"}
              subHeadingStyles="text-2xl text-accent font-semibold"
              isDark={true}
            />
            <div className="flex flex-col gap-[20px] px-[10px] text-gray-transparent text-[16px] leading-[170%] my-[24px]">
              <p>
                {t("Greeting")} <b>{t("Name")}</b>, {t("Over12Years")}
              </p>
              <p>
                {t("OverTheYears")} <b>{t("Atmoshpere")}</b>, {t("ItsHistory")}
              </p>
              <p>{t("InLoveWithParis")}</p>
            </div>
            <div className="w-full flex flex-row justify-between gap-2 md:gap-6 px-[10px]">
              {AboutData &&
                AboutData.map((item, index) => {
                  return (
                    <AboutCard
                      key={index}
                      value={item.title}
                      label={t(item.subTitle)}
                      icon={item.icon}
                    />
                  );
                })}
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src={cuteSmile}
                alt={`${t("Name")} - профессиональный гид`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <span className="ml-2 font-semibold">4.9</span>
                  </div>
                  <p className="text-lg">{t("CertifiedGuide")}</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">
                  {t("Conducted")}
                  <br />
                  {t("Excursions")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
