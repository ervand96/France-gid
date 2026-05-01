"use client";
import { ImageWithFallback } from "@/app/shared/imageWithFallback/imageWithFallback";
import cuteSmile from "@/assets/about/cuteSmile.jpg";
import paris from "@/assets/about/paris.jpeg";
import { Star, MapPin, Sparkles } from "lucide-react";
import { AboutHeroProps } from "./type";
import { useTranslations } from "next-intl";
import Button from "../Button";
import { useModals } from "@/context/ModalContext";

export default function AboutHero({
  description,
  statistics,
  gallery,
}: AboutHeroProps) {
  const t = useTranslations("About");
  const { openContact } = useModals();

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const imageURL = gallery?.[0]?.url
    ? `${STRAPI_URL}${gallery[0].url}`
    : cuteSmile;

  const handleContactClick = () => {
    document
      .getElementById("getInTouch")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
      <div className="min-h-screen bg-white">
        <section className="relative min-h-screen flex items-center-safe overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              width={1000}
              height={100}
              src={paris}
              alt="Paris"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <div className="relative max-w-[1440px] mx-auto  px-6 py-32 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-8">
                <div className="inline-flex items-center-safe gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-sm font-medium text-amber-100">
                    {t("Professional")}
                  </span>
                </div>

                <div>
                  <h1 className="text-7xl font-bold mb-4 leading-tight">
                    {t("Name")}
                  </h1>
                  <div className="flex items-center gap-2 text-amber-300 mb-6">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{t("Paris")}</span>
                  </div>
                </div>

                <p className="text-1xl text-gray-200 leading-relaxed max-w-xl">
                  {description}
                </p>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  {statistics &&
                    statistics?.map((stat, index) => {
                      const isRating =
                        index === 2 ||
                        stat.label.toLowerCase().includes("Рейтинг");

                      return (
                        <div
                          key={stat.id}
                          className={`text-center ${index === 1 ? "border-l border-r border-white/20" : ""}`}
                        >
                          {isRating ? (
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <span className="text-4xl font-bold text-amber-400">
                                {stat.value}
                              </span>
                              <Star
                                className="w-6 h-6 text-amber-400 mt-2"
                                fill="currentColor"
                              />
                            </div>
                          ) : (
                            <div className="text-4xl font-bold text-amber-400 mb-1">
                              {stat.value}
                            </div>
                          )}
                          <div className="text-sm text-gray-300">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="flex gap-4 pt-6">
                  <Button
                    onClick={handleContactClick}
                    styles="px-8 py-4 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all shadow-2xl font-semibold hover:scale-105"
                  >
                    {t("BookATour")}
                  </Button>
                  <Button
                    onClick={openContact}
                    styles="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-all font-semibold"
                  >
                    {t("Contact")}
                  </Button>
                </div>
              </div>

              <div className="relative lg:block hidden">
                <div className="relative">
                  <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                    <div className="aspect-[10/10] relative">
                      <ImageWithFallback
                        width={1000}
                        height={100}
                        src={imageURL}
                        alt="Гарик Саакян"
                        className="w-full h-full object-cover"
                        unoptimized
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 bg-accent from-amber-500 to-orange-600 text-white rounded-2xl p-6 shadow-2xl">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">экскурсий</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
