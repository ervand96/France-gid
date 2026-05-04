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
    duration: "2 - 4",
    group: "1-7",
    rating: "5.0",
    category: "Popular",
    isLarge: true,
    href: PathnameEnum.ExcursionsInParis,
  },
  {
    id: 2,
    title: "ExcursionsToTheSuburbs",
    description: "TheLuxury",
    image: vercaillesImg,
    duration: "4 - 10",
    group: "1-7",
    rating: "4.9",
    category: "History",
    href: PathnameEnum.ExcursionsToTheSuburbsOfParis,
  },
  {
    id: 3,
    title: "RegionsOfFrance",
    description: "WineTours",
    image: niceImg,
    duration: "5 - 13",
    group: "1-7",
    rating: "4.8",
    category: "Journey",
    href: PathnameEnum.ToursOfFrance,
  },
];
