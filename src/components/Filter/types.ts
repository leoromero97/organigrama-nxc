import { ButtonHTMLAttributes } from "react";

export type FilterPropTypes = {
  selected?: boolean
  label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
