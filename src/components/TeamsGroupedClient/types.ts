import type { CardCollaboratorPropTypes } from "../CardCollaborator/types";
import type { TeamMembersGroupPropTypes } from "../TeamsGroupedTeamMembers/types";

export type ClientType = "Banco Macro" | "Banco Galicia" | "Nonconformist";

export type TeamsByClient = {
  clientName: string;
  teamMembersGroup?: TeamMembersGroupPropTypes[];
};

export type TeamsClientGroupPropTypes = {
  teamLeadNxCId?: string;
  teamLeadData?: CardCollaboratorPropTypes;
  teamsByClient?: TeamsByClient[];
  unselected?: boolean;
  leadUnSelected?: boolean;
  collaboratorUnSelected?: boolean;
};
