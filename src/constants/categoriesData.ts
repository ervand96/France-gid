import { StaticImageData } from "next/image";
import { PathnameEnum } from "./pathName";
import parisImg from "@/assets/categories/paris.jpg";
import niceImg from "@/assets/categories/nice.png";
import vercaillesImg from "@/assets/categories/versailles.jpg";

export type CategoryItem = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  href?: string;
  duration?: string;
  group?: string;
  rating?: string;
  category: string;
  isLarge?: boolean;
};

export const CategoriesData: CategoryItem[] = [
  {
    id: 1,
    title: "ExcursionsInParis",
    description: "Discover",
    image: parisImg,
    duration: "4-8",
    group: "1-6",
    rating: "5.0",
    category: "Popular",
    isLarge: true,
    href: PathnameEnum.ExcursionsInParis,
  },
  {
    id: 2,
    title: "ExcursionsToTheSuburbs",
    description: "TheLuxury",
    image: niceImg,
    duration: "6",
    group: "1-4",
    rating: "4.9",
    category: "History",
    href: PathnameEnum.ExcursionsToTheSuburbsOfParis,
  },
  {
    id: 3,
    title: "RegionsOfFrance",
    description: "WineTours",
    image: vercaillesImg,
    duration: "36-48",
    group: "1-2",
    rating: "4.8",
    category: "Journey",
    href: PathnameEnum.ToursOfFrance,
  },
];
