import icAyf from "@/assets/icons/ic-a&f.svg";
import icBusiness from "@/assets/icons/ic-business.svg";
import icContent from "@/assets/icons/ic-content-designer.svg";
import icData from "@/assets/icons/ic-data.svg";
import icDesigner from "@/assets/icons/ic-designer.svg";
import icDeveloper from "@/assets/icons/ic-developer.svg";
import icEducation from "@/assets/icons/ic-education.svg";
import icGrowth from "@/assets/icons/ic-growth.svg";
import icProductDesigner from "@/assets/icons/ic-product-designer.svg";
import icResearcher from "@/assets/icons/ic-researcher.svg";
import icTalent from "@/assets/icons/ic-talent.svg";
import icUxDesigner from "@/assets/icons/ic-ux-designer.svg";
import icVisualDesigner from "@/assets/icons/ic-visual-designer.svg";
import type { RolePropTypes } from "./types";

export const getRoleType = (roleName?: string): RolePropTypes["type"] => {
  let type = "a&f";

  if (roleName === "UX Designer") type = "ux";
  if (roleName === "Product Designer") type = "product";
  if (roleName === "Talent") type = "people";
  if (roleName === "Designer") type = "designer";
  if (roleName === "Learning") type = "education";
  if (roleName === "Content Designer") type = "content";
  if (roleName === "Data") type = "analyst";
  if (roleName === "Visual Designer") type = "visual";
  if (roleName === "Business") type = "business";
  if (roleName?.includes("Developer")) type = "developer";
  if (roleName === "Growth") type = "growth";
  if (roleName?.includes("Researcher")) type = "researcher";

  return type as RolePropTypes["type"];
};

export const getRoleIcon = (type: RolePropTypes["type"]): string => {
  let icon = icAyf;

  if (type === "analyst") icon = icData;
  if (type === "business") icon = icBusiness;
  if (type === "content") icon = icContent;
  if (type === "designer") icon = icDesigner;
  if (type === "developer") icon = icDeveloper;
  if (type === "growth") icon = icGrowth;
  if (type === "learning") icon = icEducation;
  if (type === "people") icon = icTalent;
  if (type === "product") icon = icProductDesigner;
  if (type === "researcher") icon = icResearcher;
  if (type === "ux") icon = icUxDesigner;
  if (type === "visual") icon = icVisualDesigner;

  return icon;
};
