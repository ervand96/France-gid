import { ReactNode } from "react";

export type ButtonType = {
  text?: string;
  styles: string;
  onClick: () => void;
  disabled?: boolean;
  children?: ReactNode;
};
