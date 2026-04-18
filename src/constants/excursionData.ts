import { StaticImageData } from "next/image";
import defaultImage from "../assets/elements/placeholder.jpg";
import { CategoryEnum } from "./categoryEnum";

export type Excursion = {
  id: string;
  key: string;
  duration: string;
  category: string;
  img: StaticImageData;
};

export const excursionsData: Excursion[] = [
  {
    id: "1",
    key: "SightseeingTourOfParis",
    duration: "4 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
  {
    id: "2",
    key: "EveningParisTour",
    duration: "3 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
  {
    id: "3",
    key: "TourOfMontmartre",
    duration: "2 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
  {
    id: "4",
    key: "LatinQuarter",
    duration: "2 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
  {
    id: "5",
    key: "TourOfTheMarais",
    duration: "2 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
  {
    id: "6",
    key: "LouvreMuseum",
    duration: "2 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
  {
    id: "7",
    key: "EiffelTower",
    duration: "2 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
  {
    id: "8",
    key: "GrandOpera",
    duration: "1.5 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
  {
    id: "9",
    key: "PalaceOfVersailles",
    duration: "4 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "10",
    key: "PalaceOfFontainebleau",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "11",
    key: "ChâteauDeVauxLleVicomte",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "12",
    key: "CandlelightTour",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "13",
    key: "ChâteauDeChantilly",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "14",
    key: "RussianCemetery",
    duration: "4 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "15",
    key: "ThuareeSafariPark",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "16",
    key: "FranceInMiniaturePark",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "17",
    key: "VisitingDisneyland",
    duration: "10 ч",
    category: CategoryEnum.EXCURSIONSTOTHESUBURBSOFPARIS,
    img: defaultImage,
  },
  {
    id: "18",
    key: "ChâteauDePierrefonds",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSTOTHEREGIONSOFFRANCE,
    img: defaultImage,
  },
  {
    id: "19",
    key: "ExcursionToGiverny",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSTOTHEREGIONSOFFRANCE,
    img: defaultImage,
  },
  {
    id: "20",
    key: "TourOfChartres",
    duration: "6 ч",
    category: CategoryEnum.EXCURSIONSTOTHEREGIONSOFFRANCE,
    img: defaultImage,
  },
  {
    id: "21",
    key: "NormandyTour",
    duration: "12 ч",
    category: CategoryEnum.EXCURSIONSTOTHEREGIONSOFFRANCE,
    img: defaultImage,
  },
  {
    id: "22",
    key: "CastlesOfTheLoire",
    duration: "12 ч",
    category: CategoryEnum.EXCURSIONSTOTHEREGIONSOFFRANCE,
    img: defaultImage,
  },
  {
    id: "23",
    key: "ChampagneTour",
    duration: "10 ч",
    category: CategoryEnum.EXCURSIONSTOTHEREGIONSOFFRANCE,
    img: defaultImage,
  },
  {
    id: "24",
    key: "ExcursionToMont",
    duration: "13 ч",
    category: CategoryEnum.EXCURSIONSTOTHEREGIONSOFFRANCE,
    img: defaultImage,
  },
  {
    id: "25",
    key: "VisitingTheMoulin",
    duration: "5 ч",
    category: CategoryEnum.EXCURSIONSINPARIS,
    img: defaultImage,
  },
];
