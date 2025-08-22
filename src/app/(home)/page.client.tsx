"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { DataPropTypes } from "@/types";
import { TeamsClientGroupPropTypes } from "@/components/TeamsGroupedClient/types";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TeamsGroupedClient from "@/components/TeamsGroupedClient";
import { FilterOptions } from "@/integrations/getOptionsFilters";
import HomePageLoading from "./loading";
import Filter from "@/components/Filter";
//import InputSearch from "@/components/Inputs/InputSearch";
import { getTeamsGroupedClient } from "@/utils/getTeamsGroupedClient";
// import { useKeywordValue } from "@/hooks/useKeywordValue";
// import { KeywordValueProvider } from "@/context/keywordSearchContext";

function HomePageClient({
  data,
  titleSidebar = "Organigrama",
}: Readonly<{
  data: TeamsClientGroupPropTypes[];
  titleSidebar?: string;
  options?: FilterOptions;
}>) {
  const [selectClient, setSelectClient] = useState("all");
  /*  const [searchValue, setSearchValue] = useState<string>("");
  const { setKeyword } = useKeywordValue();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e)
    e.preventDefault();
    setKeyword(searchValue);
  }; */

  return (
    <main className="min-h-screen max-h-screen flex flex-col w-full items-center gap-4">
      <Header
      /* rightContent={
          <form onSubmit={handleSubmit}>
            <InputSearch
              name="search"
              placeholder="Buscar por rol o nombre"
              value={searchValue}
              onChange={handleChange}
            />
          </form>
        } */
      />
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
  data: DataPropTypes[];
  options: FilterOptions;
  titleSidebar?: string;
}>) {
 /* const [dataState, setDataState] = useState(data);
  const { keywordValue } = useKeywordValue();

   useEffect(() => {
    if (keywordValue !== "") {
      const dataFilter = data.filter(
        (collaborator) => collaborator.name === keywordValue
      );
      setDataState(dataFilter);
    }
  }, [keywordValue]); */

  const finalData = getTeamsGroupedClient(data);

  return (
    <HomePageClient
      data={finalData}
      titleSidebar={titleSidebar}
      options={options}
    />
  );
}

export default dynamic(async () => HomePageClientContainer, {
  ssr: false,
  loading: HomePageLoading,
});
