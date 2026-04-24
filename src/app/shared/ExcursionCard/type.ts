import { StaticImageData } from "next/image";

export type ExcursionProps = {
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