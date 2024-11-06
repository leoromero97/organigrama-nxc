import { TeamsClientGroupPropTypes } from "@/components/TeamsGroupedClient/types";
import { DataPropTypes } from "../types";
import { getGroupByTeamOwner } from "./getGroupsByTeamOwner";
import { getTeamsByClientName } from "./getTeamsByClientName";

export const getFinalData = (
  data: DataPropTypes[]
): TeamsClientGroupPropTypes[] => {
  const dataGroupedByLead: TeamsClientGroupPropTypes[] = [];

  data.forEach((collaborator) => {
    let leadTeamsByClient: TeamsClientGroupPropTypes["teamsByClient"] = [];

    if (collaborator.isLeadNxC) {
      collaborator.clients?.forEach((client) => {
        const dataGroupedByTeamOwner = getGroupByTeamOwner(data);
        const teamsByClient = getTeamsByClientName(
          dataGroupedByTeamOwner,
          client.name
        );

        leadTeamsByClient = teamsByClient;
      });

      const teamLeadData = {
        teamLeadNxCId: collaborator.id,
        teamLeadData: collaborator,
        teamsByClient: leadTeamsByClient,
      };

      dataGroupedByLead.push(teamLeadData);
    }
  });

  return dataGroupedByLead;
};
