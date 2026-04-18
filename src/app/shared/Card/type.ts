import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export type CardType = {
  primaryText?: string;
  primaryTextStyles?: string;
  secondaryText?: string;
  secondaryTextStyles?: string;
  description?: string;
  descriptionStyles?: string;
  textBlockStyles?: string;
  stylesOfCard: string;
  img?: StaticImageData;
  imageAltText?: string;
  imgStyles?: string;
  onClick?: () => void;
  children?: ReactNode;
};
