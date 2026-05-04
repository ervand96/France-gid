import { ImageWithFallback } from "@/app/shared/imageWithFallback/imageWithFallback";
import cuteSmile from "@/assets/about/cuteSmile.jpg";
import paris from "@/assets/about/paris.jpeg";
import { Star } from "lucide-react";
import { AboutHeroProps } from "./type";
import ContactButtons from "../ContactButton";
import SmallHeader from "../SmallHeader";

export default async function AboutHero({
  description,
  statistics,
  aboutPageImage,
  countExcursions,
}: AboutHeroProps) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const rawImageUrl = aboutPageImage?.[0]?.url;

  const imageURL = rawImageUrl
    ? rawImageUrl.startsWith("http")
      ? rawImageUrl
      : `${STRAPI_URL}${rawImageUrl}`
    : cuteSmile;

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
                <SmallHeader />

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
                  <ContactButtons />
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
                    <div className="text-3xl font-bold">
                      {countExcursions} +
                    </div>
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
