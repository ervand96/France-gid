import { PathnameEnum } from "./pathName";

export type NavItem = {
  key: string;
  path: string;
};

export const navData: NavItem[] = [
  { key: "ExcursionsInParis", path: PathnameEnum.ExcursionsInParis },
  {
    key: "ExcursionsToTheSuburbsOfParis",
    path: PathnameEnum.ExcursionsToTheSuburbsOfParis,
  },
  { key: "ToursOfFrance", path: PathnameEnum.ToursOfFrance },
  { key: "Transfer", path: PathnameEnum.Transfer },
];
