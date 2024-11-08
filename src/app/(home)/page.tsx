//import {unstable_cacheTag as cacheTag, unstable_cacheLife as cacheLife} from "next/cache";

import { getTeamsGroupedClient } from "@/utils/getTeamsGroupedClient";
import getMappedData from "@/integrations/getDataWithBooleans";
import { getOptionsFilters } from "@/integrations/getOptionsFilters";
import { SectionPropTypes } from "@/components/Sidebar/types";
import HomePageClient from "./page.client";

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
    <HomePageClient
      data={finalData}
      sections={sections}
      options={options}
      titleSidebar="Organigrama"
    />
  );
}
