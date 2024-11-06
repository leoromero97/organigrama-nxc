import type { TeamMembersGroupPropTypes } from "@/components/TeamsGroupedTeamMembers/types";
import type { DataPropTypes } from "../types";

export function getGroupByTeamOwner(
  data: DataPropTypes[]
): TeamMembersGroupPropTypes[] {
  const dataGroupedByTeamOwner: TeamMembersGroupPropTypes[] = [];

  data.forEach((collaborator) => {
    if (collaborator.isTeamOwner && !collaborator.isLeadNxC) {
      const teamMembersByTeamOwner = data.filter(
        (currentCollaborator) =>
          currentCollaborator.teamOwner === collaborator.name
      );

      dataGroupedByTeamOwner.push({
        teamOwnerId: collaborator.id,
        teamOwnerData: collaborator,
        teamMembers: [...teamMembersByTeamOwner],
      });
    }
  });

  return dataGroupedByTeamOwner;
}
