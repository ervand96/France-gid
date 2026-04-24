"use client";

import { ImageWithFallback } from "@/app/shared/imageWithFallback/imageWithFallback";
import { Star, Clock, Users } from "lucide-react";
import { TourCard as TourCardType } from "lib/utils/tourCardType";
import Link from "next/link";
import { reverseCategoryMap, CategoryEnum } from "@/constants/categoryEnum";
import { useTranslations } from "next-intl";

interface TourCardProps {
  tour: TourCardType;
  locale: string;
}

const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL || "";

export function TourCardNew({ tour, locale }: TourCardProps) {
  const t = useTranslations("TourCard");

  const imagePath = tour.bgImg?.formats?.medium?.url || tour.bgImg?.url || "";

  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : `${strapiURL}${imagePath}`;

  const categoryUrl =
    reverseCategoryMap[tour.filterCategory as CategoryEnum] ||
    tour.filterCategory;

  const tourHref = `/${locale}/${categoryUrl}/${tour.slug}`;

  return (
    <Link href={tourHref} className="group block h-full w-full">
      <div className="relative bg-gray-transparent rounded-2xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 h-full w-full flex flex-col">
        <div className="relative h-72 overflow-hidden shrink-0">
          <ImageWithFallback
            src={imageUrl}
            alt={tour.primaryText}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            width={600}
            height={400}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

          <div className="absolute top-4 left-4 flex flex-col items-start flex-wrap gap-2">
            {tour?.category && (
              <span className="px-[12px] py-[4px] bg-gray-transparent backdrop-blur-sm text-secondary text-[12px] font-[600] leading-[133%] rounded-full uppercase tracking-wider">
                {tour.category}
              </span>
            )}
            {tour?.isRecommended && (
              <span className="px-[12px] py-[4px] bg-accent text-secondary text-[12px] font-[600] leading-[133%] rounded-full uppercase tracking-wider">
                {t("Recommendation")}
              </span>
            )}
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-1 bg-gray-transparent backdrop-blur-sm px-2.5 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span className="text-[12px] font-[600] leading-[143%]">
              {tour?.rating || "5.0"}
            </span>
          </div>



          <h3 className="absolute bottom-4 left-4 right-4 text-secondary text-[20px] font-[600] leading-[140%] line-clamp-2">
            {tour.primaryText}
          </h3>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-4 mb-6 text-gray-400 text-xs">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent/80" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-accent/80" />
              <span>{t("Group")}</span>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                {t("From")}
              </span>
              <span className="text-accent text-2xl font-black">
                {tour.price ? `€ ${tour.price}` : "—"}
              </span>
            </div>
            <div className="px-5 py-2.5 bg-accent group-hover:bg-accent/80 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-accent/20 uppercase tracking-wide">
              {t("ReadMore")}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
