import type { ReactNode } from "react";

export type SectionPropTypes = {
  id: string;
  subtitle: string;
  options: string[];
};
export type SidebarPropTypes = {
  title: string;
  isSelected?: string;
  children?: ReactNode;
};
