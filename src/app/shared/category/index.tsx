"use client";

import { useTranslations } from "next-intl";
import ExcursionCard from "../ExcursionCard";
import { CategoriesData } from "@/constants/categoriesData";

export default function CategoryCards() {
  const t = useTranslations("HeroSection");

  return (
    <div className="w-full px-[10px]">
      <main className="w-full flex flex-col md:flex-row items-stretch justify-between gap-4">
        <div className="w-full md:w-1/2">
          <ExcursionCard
            {...CategoriesData[0]}
            title={t(CategoriesData[0].title)}
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-row md:flex-col justify-between gap-4">
          <div className="w-1/2 md:w-full">
            <ExcursionCard
              {...CategoriesData[1]}
              title={t(CategoriesData[1].title)}
            />
          </div>
          <div className="w-1/2 md:w-full">
            <ExcursionCard
              {...CategoriesData[2]}
              title={t(CategoriesData[2].title)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
