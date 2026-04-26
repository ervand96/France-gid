import { ReactNode } from "react";

export type ButtonType = {
  text?: string;
  styles?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  designType?: "gold" | "white" | "transparent"
};
