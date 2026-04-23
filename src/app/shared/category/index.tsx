"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { ArrowRight, Star, Clock, Users } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import parisNew from "@/assets/elements/paris_new.avif";
import beautiful from "@/assets/elements/beautiful.avif";
import river from "@/assets/elements/river.avif";

interface ExcursionProps {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  duration: string;
  group: string;
  rating: string;
  category: string;
  isLarge?: boolean;
  href: string;
}

const ExcursionCard = ({
  title,
  description,
  image,
  duration,
  group,
  rating,
  category,
  isLarge,
  href,
}: ExcursionProps) => {
  const locale = useLocale();

  return (
    <Link href={`/${locale}${href}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`group relative overflow-hidden rounded-2xl bg-ebony ${isLarge ? "md:row-span-2 h-[600px]" : "h-[290px]"} cursor-pointer shadow-xl`}
      >
        <div className="absolute inset-0 z-0 scale-105 transition-transform duration-1000 group-hover:scale-100">
          <Image
            width={100}
            height={100}
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="absolute top-6 left-6 z-20 flex gap-2">
          <span className="bg-gold/90 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
            <Star className="h-3 w-3 fill-black" /> {rating}
          </span>
          <span className="backdrop-blur-md bg-white/10 border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 p-8">
          <h3
            className={`font-serif leading-tight text-white group-hover:text-gold transition-colors duration-300 ${isLarge ? "text-4xl mb-4" : "text-2xl mb-2"}`}
          >
            {title}
          </h3>

          <p
            className={`text-white/60 leading-relaxed transition-all duration-500 overflow-hidden ${isLarge ? "text-base mb-6 max-h-24" : "text-sm mb-4 max-h-0 group-hover:max-h-12"}`}
          >
            {description}
          </p>

          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-white/50 tracking-wider">
                <Clock className="h-3 w-3 text-gold" /> {duration}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-white/50 tracking-wider">
                <Users className="h-3 w-3 text-gold" /> {group}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-widest group/btn">
              <span>Подробнее</span>
              <ArrowRight className="h-4 w-4 text-gold group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function CategoryCards() {
  const excursions: ExcursionProps[] = [
    {
      id: 1,
      title: "Экскурсии в Париже",
      description:
        "Откройте для себя магию ночного Парижа, величие Лувра и богемный дух Монмартра в индивидуальном формате.",
      image: parisNew,
      duration: "4-8 Часов",
      group: "1-6 чел.",
      rating: "5.0",
      category: "Популярное",
      isLarge: true,
      href: "/excursions-in-paris",
    },
    {
      id: 2,
      title: "Предместья Парижа",
      description:
        "Роскошь Версаля, сады Живерни и величие замков в окрестностях столицы.",
      image: beautiful,
      duration: "6 Часов",
      group: "1-4 чел.",
      rating: "4.9",
      category: "История",
      href: "/excursions-to-the-suburbs-of-paris",
    },
    {
      id: 3,
      title: "Регионы Франции",
      description:
        "Винные туры, лавандовые поля и океанское побережье Нормандии.",
      image: river,
      duration: "1-2 Дня",
      group: "Инд.",
      rating: "4.8",
      category: "Путешествие",
      href: "/excursions-to-the-regions-of-france",
    },
  ];

  return (
    <div className="w-[100%] flex flex-col">
      <main className="W-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-[100%]">
          <div className="lg:col-span-2">
            <ExcursionCard {...excursions[0]} />
          </div>

          <div className="flex flex-col gap-8">
            <ExcursionCard {...excursions[1]} />
            <ExcursionCard {...excursions[2]} />
          </div>
        </div>
      </main>
    </div>
  );
}
