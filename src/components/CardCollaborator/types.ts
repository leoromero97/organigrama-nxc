import { DataPropTypes } from "@/types";
import { SeniorityPropTypes } from "../Seniority/types";

export type CardCollaboratorPropTypes = {
  id?: string;
  name?: string;
  imageUrl?: string;
  role?: string;
  seniority?: SeniorityPropTypes["types"];
  clients?: DataPropTypes["clients"];
  projectName?: string;
  teamOwner?: string;
  leadNxC?: string;
  isTeamOwner?: boolean | null;
};
