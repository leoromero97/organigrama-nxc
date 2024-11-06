import type { CardCollaboratorPropTypes } from "../CardCollaborator/types";

export type TeamMembersGroupPropTypes = {
  teamOwnerId: string;
  teamOwnerData?: CardCollaboratorPropTypes;
  teamMembers?: CardCollaboratorPropTypes[];
};
