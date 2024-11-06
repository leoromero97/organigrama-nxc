import { FilterRaw, OptionsPropTypes } from "@/types";

export function calculateOptions(options: FilterRaw[]): OptionsPropTypes {
  const roles = new Set<FilterRaw["role"]>();
  const clients = new Set<FilterRaw["client"]>();
  const seniorities = new Set<FilterRaw["seniority"]>();

  for (const { role, client, seniority } of options) {
    roles.add(role);
    clients.add(client);
    seniorities.add(seniority);
  }

  return {
    roles: Array.from(roles).toSorted((a, b) => a.localeCompare(b)),
    clients: Array.from(clients).toSorted((a, b) => a.localeCompare(b)),
    seniorities: Array.from(seniorities).toSorted((a, b) => a.localeCompare(b)),
  };
}
