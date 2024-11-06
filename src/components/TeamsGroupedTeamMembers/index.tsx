import React from "react";
import type { TeamMembersGroupPropTypes } from "./types";
import CardCollaborator from "../CardCollaborator";

export default function TeamsGroupedTeamMembers({
  teamOwnerId,
  teamOwnerData,
  teamMembers,
}: Readonly<TeamMembersGroupPropTypes>) {
  return (
    <div className="flex flex-row flex-wrap gap-8 border border-white border-opacity-50 rounded-2xl px-4 py-10 w-full justify-center">
      {teamOwnerId === teamOwnerData?.id && (
        <CardCollaborator
          key={teamOwnerId}
          id={teamOwnerId}
          imageUrl={teamOwnerData?.imageUrl}
          name={teamOwnerData?.name}
          role={teamOwnerData?.role}
          seniority={teamOwnerData?.seniority}
          clients={teamOwnerData?.clients}
          projectName={teamOwnerData?.projectName}
          leadNxC={teamOwnerData?.leadNxC}
          teamOwner={teamOwnerData?.teamOwner}
          isTeamOwner={teamOwnerData?.isTeamOwner}
        />
      )}
      {!!teamMembers &&
        teamMembers?.map((collaborator) => (
          <CardCollaborator
            key={collaborator.id}
            id={collaborator?.id}
            imageUrl={collaborator?.imageUrl}
            name={collaborator?.name}
            role={collaborator?.role}
            seniority={collaborator?.seniority}
            clients={collaborator?.clients}
            projectName={collaborator?.projectName}
            leadNxC={collaborator?.leadNxC}
            teamOwner={collaborator?.teamOwner}
          />
        ))}
    </div>
  );
}
