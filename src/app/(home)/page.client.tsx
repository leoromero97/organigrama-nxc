"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { FiltersPropTypes } from "@/types";
import { TeamsClientGroupPropTypes } from "@/components/TeamsGroupedClient/types";
import { SectionPropTypes } from "@/components/Sidebar/types";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TeamsGroupedClient from "@/components/TeamsGroupedClient";
import { FilterOptions } from "@/integrations/getOptionsFilters";
import HomePageLoading from "./loading";

function HomePageClient({
  data,
  filters,
  sections,
  titleSidebar = "Organigrama",
  options,
}: Readonly<{
  data: TeamsClientGroupPropTypes[];
  filters?: FiltersPropTypes;
  sections?: SectionPropTypes[];
  titleSidebar?: string;
  options?: FilterOptions;
}>) {
  const [selectClient, setSelectClient] = useState('')
  function handleFilter(key: string, value: string) {
    // Create new search params
    const params = new URLSearchParams(window.location.search);

    // Update or remove the value changed
    if (value) {
      params.set(key, value);
      setSelectClient(value)
    } else {
      params.delete(key);
    }

    // As there is no server-side stuff going on, we can just update the URL without reloading
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <main className="min-h-screen max-h-screen flex flex-col w-full items-center gap-4">
      <Header />
      <div className="flex flex-row max-h-[800px] max-w-8xl">
        <Sidebar title={titleSidebar} sections={sections} isSelected={selectClient} />
        <select
          aria-label="Seleccionar los clientes"
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-[180px] [&>span]:line-clamp-1"
          defaultValue={filters?.client}
          onChange={(e) => handleFilter("client", e.target.value)}
        >
          <option value="">Todos los clientes</option>
          {options?.clients.map((client) => (
            <option key={client}>{client}</option>
          ))}
        </select>
        <div className="flex flex-col h-auto gap-40 justify-between overflow-y-auto py-10">
          {data.map((data) =>{ 
            const hideTeam = data.teamsByClient?.some(team => team.clientName === selectClient || selectClient === '')
            return (
            <TeamsGroupedClient
              key={data.teamLeadNxCId}
              teamLeadNxCId={data.teamLeadNxCId}
              teamLeadData={data.teamLeadData}
              teamsByClient={data.teamsByClient}
              unselected={!hideTeam}
            />
          )}
          )}
        </div>
      </div>
      <footer className="py-6 w-full max-w-8xl flex items-center justify-center">
        Todos los derechos reservados - Nonconformist
      </footer>
    </main>
  );
}

function HomePageClientContainer({
  data,
  sections,
  titleSidebar,
  options,
}: Readonly<{
  data: TeamsClientGroupPropTypes[];
  options: FilterOptions;
  sections?: SectionPropTypes[];
  titleSidebar?: string;
}>) {
  const searchParams = useSearchParams();
  const filters: FiltersPropTypes = {
    client: searchParams.get("client") ?? "",
    role: searchParams.get("role") ?? "",
    seniority: searchParams.get("seniority") ?? "",
    sort: (searchParams.get("sort") as FiltersPropTypes["sort"]) || "role",
  };

  //const dataFiltered = filterOptions(options, filters)
  //const dataSorted = sortData(dataFiltered, filters) 
  return (
    <HomePageClient
      filters={filters}
      data={data}
      sections={sections}
      titleSidebar={titleSidebar}
      options={options}
    />
  );
}

export default dynamic(async () => HomePageClientContainer, {
  ssr: false,
  loading: HomePageLoading,
});
