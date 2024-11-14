//import {unstable_cacheTag as cacheTag, unstable_cacheLife as cacheLife} from "next/cache";

import { getTeamsGroupedClient } from "@/utils/getTeamsGroupedClient";
import getMappedData from "@/integrations/getDataWithBooleans";
import { getOptionsFilters } from "@/integrations/getOptionsFilters";
import HomePageClient from "./page.client";

export default async function Home() {
  //"use cache";

  //cacheLife("weeks");
  //cacheTag("/");

  const data = await getMappedData();

  const finalData = getTeamsGroupedClient(data);

  const options = getOptionsFilters(data);

  return (
    <HomePageClient
      data={finalData}
      options={options}
      titleSidebar="Organigrama"
    />
  );
}
