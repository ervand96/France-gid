"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Star, Clock, Users } from "lucide-react";
import { CategoriesData } from "@/constants/categoriesData";

interface ExcursionProps {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  duration?: string;
  group?: string;
  rating?: string;
  category: string;
  isLarge?: boolean;
  href?: string;
}

const ExcursionCard = ({
  image,
  title,
  description,
  rating,
  category,
  duration,
  group,
  isLarge,
  href,
}: ExcursionProps) => {
  const t = useTranslations("HeroSection")
  const locale = useLocale();

  return (
    <Link href={`/${locale}${href}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`group relative overflow-hidden rounded-2xl ${isLarge ? "md:row-span-2 h-[600px]" : "h-[290px]"} cursor-pointer shadow-xl`}
      >
        <div className="absolute inset-0 z-0 scale-105 transition-transform duration-1000 group-hover:scale-100">
          <Image
            width={1000}
            height={1000}
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="absolute top-6 left-6 z-20 flex gap-2">
          <span className="bg-accent text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
            <Star className="h-3 w-3 fill-black" /> {rating}
          </span>
          <span className="backdrop-blur-md bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {t(category)}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 p-8">
          <h3
            className={`font-serif leading-tight text-secondary group-hover:text-accent transition-colors duration-300 ${isLarge ? "text-4xl mb-4" : "text-2xl mb-2"}`}
          >
            {title}
          </h3>

          <p
            className={`text-secondary/60 leading-relaxed transition-all duration-500 overflow-hidden ${isLarge ? "text-base mb-6 max-h-24" : "text-sm mb-4 max-h-0 group-hover:max-h-12"}`}
          >
            {t(description)}
          </p>

          <div className="flex items-center justify-between border-t border-secondary/10 pt-4">
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-secondary tracking-wider">
                <Clock className="h-3 w-3 text-accent" /> {duration + " " + t("Hours")}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-secondary tracking-wider">
                <Users className="h-3 w-3 text-accent" /> {group + " " + t("People")}
              </span>
            </div>
            <div className="flex items-center gap-2 text-secondary font-bold text-[11px] uppercase tracking-widest group/btn">
              <span>{t("Details")}</span>
              <ArrowRight className="h-4 w-4 text-accent group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function CategoryCards() {
  const t = useTranslations("HeroSection")

  return (
    <div className="w-full">
      <main className="w-full flex items-center justify-between gap-[16px]">
        <div className="w-full">
          <ExcursionCard
            {...CategoriesData[0]}
            title={t(CategoriesData[0].title)}
          />
        </div>
        <div className="w-full flex flex-col gap-[16px]">
          <ExcursionCard
            {...CategoriesData[1]}
            title={t(CategoriesData[1].title)}
          />
          <ExcursionCard
            {...CategoriesData[2]}
            title={t(CategoriesData[2].title)}
          />
        </div>
      </main>
    </div>
  );
}
