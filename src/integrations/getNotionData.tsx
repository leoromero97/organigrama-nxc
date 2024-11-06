import type {
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { api } from "../api";
import type {
  DataPropTypes,
  NotionClientPageType,
  PageDataPropTypes,
} from "../types";
import { SeniorityPropTypes } from "@/components/Seniority/types";

export const getData = async () => {
  const query = await api.getObjectByDatabase();

  const results: Array<
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
  > = query.results;

  const pagesData: DataPropTypes[] = [];
  for (const result of results) {
    const pageId = result.id;

    const pageData = await api.getDataPageById(pageId);
    
    const clientsDatabaseIds = (
      pageData as PageDataPropTypes
    )?.properties?.Cliente.relation.map(({ id }) => id);

    if (pageData) {
      const clientsData: DataPropTypes["clients"] = [];

      if (clientsDatabaseIds) {
        for (const clientId of clientsDatabaseIds) {
          const clientPageData = await api.getDataPageById(clientId ?? "");
          if (clientPageData) {
            const clientImage = (clientPageData as NotionClientPageType).icon
              ?.file?.url;
            const clientName = (clientPageData as NotionClientPageType)
              .properties?.Nombre?.title[0]?.plain_text;
            clientsData.push({
              id: clientId,
              imageUrl: clientImage,
              name: clientName,
            });
          }
        }
      }
      const id = pageData.id;
      const name = (pageData as PageDataPropTypes)?.properties?.Nombre?.title[0]
        ?.plain_text;
      const role = (pageData as PageDataPropTypes)?.properties?.Rol?.select
        ?.name;
      const imageUrl = (pageData as PageDataPropTypes)?.properties?.Image
        .files[0]?.file?.url;
      const seniority = (pageData as PageDataPropTypes)?.properties?.Seniority
        ?.select?.name as SeniorityPropTypes["types"];
      const discipline = (pageData as PageDataPropTypes)?.properties?.Disciplina
        ?.select?.name;
      const mainProjectName = (pageData as PageDataPropTypes)?.properties
        ?.Proyectos?.multi_select[0]?.name;
      const teamOwner = (pageData as PageDataPropTypes)?.properties?.TeamOwner
        ?.rich_text[0]?.plain_text;
      const leadNxC = (pageData as PageDataPropTypes)?.properties?.LeadNxC
        ?.rich_text[0]?.plain_text;

      pagesData.push({
        id,
        name,
        role,
        clients: clientsData,
        imageUrl,
        seniority,
        discipline,
        projectName: mainProjectName,
        teamOwner,
        leadNxC,
      });
    } else {
      console.error("Error procesando pagina con ID: ", pageId);
    }
  }
  return pagesData;
};
