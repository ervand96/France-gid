import { LucideIcon, Star, Clock, Users } from "lucide-react";

const START_YEAR = 2014;
const years = new Date().getFullYear() - START_YEAR;

export type AboutItem = {
  title: string | number;
  subTitle: string;
  icon: LucideIcon;
};

export const AboutData: AboutItem[] = [
  { title: years, subTitle: "Experience", icon: Clock },
  { title: "15K+", subTitle: "Tourists", icon: Users },
  { title: 4.9, subTitle: "Rating", icon: Star },
];
