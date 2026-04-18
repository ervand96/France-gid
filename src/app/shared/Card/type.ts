import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type CardType = {
  primaryText?: string;
  primaryTextStyles?: string;
  secondaryText?: string;
  secondaryTextStyles?: string;
  description?: string;
  descriptionStyles?: string;
  textBlockStyles?: string;
  stylesOfCard?: string;
  bgImage?: StaticImageData;
  img?: StaticImageData;
  imageAltText?: string;
  imgStyles?: string;
  onClick?: () => void;
  children?: ReactNode;
  isLink?: boolean;
  path?: string;
};
