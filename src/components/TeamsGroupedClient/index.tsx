import React from "react";
import CardCollaborator from "../CardCollaborator";
import TeamMembersGroup from "../TeamsGroupedTeamMembers";
import { getBgColorByClientName } from "./utils";
import type { TeamsClientGroupPropTypes } from "./types";

export default function TeamsGroupedClient({
  teamLeadData,
  teamLeadNxCId,
  teamsByClient,
  unselected,
}: Readonly<TeamsClientGroupPropTypes>) {
  return (
    <section className="w-full flex flex-col gap-6 items-center max-w-8xl">
      {teamLeadNxCId === teamLeadData?.id && (
        <CardCollaborator
          key={teamLeadNxCId}
          id={teamLeadNxCId}
          imageUrl={teamLeadData?.imageUrl}
          name={teamLeadData?.name}
          role={teamLeadData?.role}
          seniority={teamLeadData?.seniority}
          clients={teamLeadData?.clients}
          projectName={teamLeadData?.projectName}
          leadNxC={teamLeadData?.leadNxC}
          teamOwner={teamLeadData?.teamOwner}
          isTeamOwner={teamLeadData?.isTeamOwner}
        />
      )}
      <div className="w-full">
        {!!teamsByClient &&
          teamsByClient?.map((team) => (
            <div
              key={team?.clientName}
              className={[
                "flex flex-col gap-10 rounded-3xl p-10 bg-opacity-20",
                getBgColorByClientName(team.clientName),
                unselected && "hidden",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <h3 className="text-3xl font-semibold">{team.clientName}</h3>
              {team.teamMembersGroup?.map((teamOwnersGroup) => (
                <TeamMembersGroup
                  key={teamOwnersGroup.teamOwnerId}
                  teamOwnerId={teamOwnersGroup.teamOwnerId}
                  teamOwnerData={teamOwnersGroup.teamOwnerData}
                  teamMembers={teamOwnersGroup.teamMembers}
                />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
