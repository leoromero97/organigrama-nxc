import { FilterRaw, FiltersPropTypes } from "@/types";

export function filterOptions(
  options: FilterRaw[],
  filters: FiltersPropTypes
): FilterRaw[] {
  return options.filter((salary) => {
    return (
      salary.role.toLowerCase().includes(filters.role.toLowerCase()) &&
      salary.client.toLowerCase().includes(filters.client.toLowerCase()) &&
      salary.seniority.toLowerCase().includes(filters.seniority.toLowerCase())
    );
  });
}
