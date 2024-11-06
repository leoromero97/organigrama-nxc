//import {unstable_cacheTag as cacheTag, unstable_cacheLife as cacheLife} from "next/cache";

import Header from "@/components/Header";
import TeamsGroupedClient from "@/components/TeamsGroupedClient";
import { getTeamsGroupedClient } from "@/utils/getTeamsGroupedClient";
import getMappedData from "@/integrations/getDataWithBooleans";
import { getOptionsFilters } from "@/integrations/getOptionsFilters";
import Sidebar from "@/components/Sidebar";
import { SectionPropTypes } from "@/components/Sidebar/types";

export default async function Home() {
  //"use cache";

  //cacheLife("weeks");
  //cacheTag("/");

  const data = await getMappedData();

  const finalData = getTeamsGroupedClient(data);

  const options = getOptionsFilters(data);

  const sections: SectionPropTypes[] = [
    {
      id: "clients",
      subtitle: "Estructura por clientes",
      options: options.clients,
    },
  ];

  return (
    <main className="min-h-screen max-h-screen flex flex-col w-full items-center gap-4">
      <Header />
      <div className="flex flex-row max-h-[800px] max-w-8xl">
        <Sidebar title="Organigrama" sections={sections} />
        <div className="flex flex-col h-auto gap-40 justify-between overflow-y-auto py-10">
          {finalData.map((data) => (
            <TeamsGroupedClient
              key={data.teamLeadNxCId}
              teamLeadNxCId={data.teamLeadNxCId}
              teamLeadData={data.teamLeadData}
              teamsByClient={data.teamsByClient}
              unselected={false}
            />
          ))}
        </div>
      </div>
      <footer className="py-6 w-full max-w-8xl flex items-center justify-center">
        Todos los derechos reservados - Nonconformist
      </footer>
    </main>
  );
}
