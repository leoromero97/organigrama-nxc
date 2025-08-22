import getMappedData from "@/integrations/getDataWithBooleans";
import { getOptionsFilters } from "@/integrations/getOptionsFilters";
import HomePageClient from "./page.client";

export default async function Home() {
  //"use cache";

  //cacheLife("weeks");
  //cacheTag("/");

  const data = await getMappedData();

  const options = getOptionsFilters(data);

  return (
    <HomePageClient
      data={data}
      options={options}
      titleSidebar="Organigrama"
    />
  );
}
