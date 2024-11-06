import type { TeamMembersGroupPropTypes } from "@/components/TeamsGroupedTeamMembers/types";
import type { TeamsByClient } from "@/components/TeamsGroupedClient/types";

export function getTeamsByClientName(
  groupsByTeamOwner: TeamMembersGroupPropTypes[],
  clientName?: string
) {
  const teamsByClient: TeamsByClient[] = [];

  const teamOwnersData = groupsByTeamOwner?.map((team) => team?.teamOwnerData);
  const filteredGroupByClientName = groupsByTeamOwner.filter((group) => {
    return group?.teamOwnerData?.clients?.some(
      (client) => client.name === clientName
    );
  });

  if (
    teamOwnersData.map((teamOwner) =>
      teamOwner?.clients?.map((client) => client.name === clientName)
    )
  ) {
    teamsByClient.push({
      clientName: clientName ?? "",
      teamMembersGroup: filteredGroupByClientName,
    });
  }

  return teamsByClient;
}
