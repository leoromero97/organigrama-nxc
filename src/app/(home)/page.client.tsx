"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { FiltersPropTypes } from "@/types";
import { TeamsClientGroupPropTypes } from "@/components/TeamsGroupedClient/types";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TeamsGroupedClient from "@/components/TeamsGroupedClient";
import { FilterOptions } from "@/integrations/getOptionsFilters";
import HomePageLoading from "./loading";
import Filter from "@/components/Filter";

function HomePageClient({
  data,
  filters,
  titleSidebar = "Organigrama",
  options,
}: Readonly<{
  data: TeamsClientGroupPropTypes[];
  filters?: FiltersPropTypes;
  titleSidebar?: string;
  options?: FilterOptions;
}>) {
  const [selectClient, setSelectClient] = useState("all");
  function handleFilter(key: string, value: string) {
    // Create new search params
    const params = new URLSearchParams(window.location.search);

    // Update or remove the value changed
    if (value) {
      params.set(key, value);
      setSelectClient(value);
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
        <Sidebar title={titleSidebar} isSelected={selectClient}>
          <h2>Estructura por clientes</h2>
          <div
            aria-label="Seleccionar los clientes"
            className="w-full bordeer-2 gap-0 flex flex-col"
          >
            <Filter
              selected={selectClient === "all"}
              label="Todos los clientes"
              onClick={() => setSelectClient("all")}
            />
            <Filter
              selected={selectClient === "Banco Galicia"}
              label="Banco Galicia"
              onClick={() => setSelectClient("Banco Galicia")}
            />
            <Filter
              selected={selectClient === "Banco Macro"}
              label="Banco Macro"
              onClick={() => setSelectClient("Banco Macro")}
            />
          </div>
        </Sidebar>
        <div className="flex flex-col h-auto gap-40 justify-between overflow-y-auto py-10">
          {data.map((data) => {
            const hideTeam = data.teamsByClient?.some(
              (team) => team.clientName === selectClient
            );
            return (
              <TeamsGroupedClient
                key={data.teamLeadNxCId}
                teamLeadNxCId={data.teamLeadNxCId}
                teamLeadData={data.teamLeadData}
                teamsByClient={data.teamsByClient}
                unselected={selectClient === "all" ? false : !hideTeam}
              />
            );
          })}
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
  titleSidebar,
  options,
}: Readonly<{
  data: TeamsClientGroupPropTypes[];
  options: FilterOptions;
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
      titleSidebar={titleSidebar}
      options={options}
    />
  );
}

export default dynamic(async () => HomePageClientContainer, {
  ssr: false,
  loading: HomePageLoading,
});
