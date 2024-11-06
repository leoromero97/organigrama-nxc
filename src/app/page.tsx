import Header from "@/components/Header";
import TeamsGroupedClient from "@/components/TeamsGroupedClient";
import { DATA_MOCK } from "@/mocks/data";
import { DataPropTypes } from "@/types";
import { getFinalData } from "@/utils/getMappedData";

export default async function Home() {
  // const dataNotion = await getData() Descomentar y reemplzara DATA_MOCK por dataNotion

  const data: DataPropTypes[] = DATA_MOCK.map((collaborator) => {
    const isTeamOwner = DATA_MOCK.some((otherCollaborator) => {
      return collaborator.name === otherCollaborator.teamOwner;
    });
    const isLeadNxC = DATA_MOCK.some((otherCollaborator) => {
      return collaborator.name === otherCollaborator.leadNxC;
    });
    return { isTeamOwner, isLeadNxC, ...collaborator };
  });

  const finalData = getFinalData(data);

  return (
    <main className="min-h-screen flex flex-col w-full items-center h-auto gap-40">
      <Header />
      {finalData.map((data) => (
        <TeamsGroupedClient
          key={data.teamLeadNxCId}
          teamLeadNxCId={data.teamLeadNxCId}
          teamLeadData={data.teamLeadData}
          teamsByClient={data.teamsByClient}
          unselected={false}
        />
      ))}
      <footer className="py-6 w-full max-w-8xl flex items-center justify-center">
        Todos los derechos reservados - Nonconformist
      </footer>
    </main>
  );
}
