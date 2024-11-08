import type { DataPropTypes } from "@/types";

export type FilterOptions = {
  clients: string[]; seniorities: string[]; roles: string[]
}

export const getOptionsFilters = (
  data: DataPropTypes[]
): FilterOptions => {
  const uniqueClientNames = new Set<string>();
  const uniqueSeniorityNames = new Set<string>();
  const uniqueRolesNames = new Set<string>();

  for (const pageData of data) {
    if (pageData.clients) {
      for (const client of pageData.clients) {
        const clientName = client.name;
        uniqueClientNames.add(clientName ?? "");
      }
    }
    if (pageData.seniority) {
      uniqueSeniorityNames.add(pageData.seniority);
    }

    if (pageData.role) {
      uniqueRolesNames.add(pageData.role);
    }
  }

  return {
    clients: Array.from(uniqueClientNames),
    seniorities: Array.from(uniqueSeniorityNames),
    roles: Array.from(uniqueRolesNames),
  };
};
