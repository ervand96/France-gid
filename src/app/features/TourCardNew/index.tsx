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
      <div className="relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-600/10 h-full w-full flex flex-col">
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

          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tour?.isRecommended && (
              <span className="px-3 py-1 bg-yellow-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                {t("Recommendation")}
              </span>
            )}
            {tour?.category && (
              <span className="px-3 py-1 bg-gray-800/90 backdrop-blur-sm text-gray-100 text-[10px] font-bold rounded-full uppercase tracking-wider">
                {tour.category}
              </span>
            )}
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
            <span className="text-white font-bold text-xs">
              {tour?.rating || "5.0"}
            </span>
          </div>

          <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold leading-tight line-clamp-2">
            {tour.primaryText}
          </h3>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-4 mb-6 text-gray-400 text-xs">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-yellow-600/80" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-yellow-600/80" />
              <span>{t("Group")}</span>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                {t("From")}
              </span>
              <span className="text-yellow-600 text-2xl font-black">
                {tour.price ? `€ ${tour.price}` : "—"}
              </span>
            </div>
            <div className="px-5 py-2.5 bg-yellow-600 group-hover:bg-yellow-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-yellow-900/20 uppercase tracking-wide">
              {t("ReadMore")}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
