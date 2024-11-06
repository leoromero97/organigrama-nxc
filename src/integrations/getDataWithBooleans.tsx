import { DataPropTypes } from "@/types";
import { getData } from "./getData";
import { DATA_MOCK } from "@/mocks/data";

export default async function getMappedData(): Promise<DataPropTypes[]> {
  const dataNotion = await getData();

  const data: DataPropTypes[] = dataNotion.map((collaborator) => {
    const isTeamOwner = dataNotion.some((otherCollaborator) => {
      return collaborator.name === otherCollaborator.teamOwner;
    });
    const isLeadNxC = dataNotion.some((otherCollaborator) => {
      return collaborator.name === otherCollaborator.leadNxC;
    });
    return { isTeamOwner, isLeadNxC, ...collaborator };
  });

  return data;
}
