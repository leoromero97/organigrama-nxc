export type SectionPropTypes = {
  id: string;
  subtitle: string;
  options: string[];
};
export type SidebarPropTypes = {
  title: string;
  sections?: SectionPropTypes[];
};
