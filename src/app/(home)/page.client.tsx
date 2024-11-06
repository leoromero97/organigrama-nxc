"use client"

import {useSearchParams} from "next/navigation";

import HomePageLoading from "./loading";
import { TeamsClientGroupPropTypes } from "@/components/TeamsGroupedClient/types";
import { FiltersPropTypes } from "@/types";

function HomePageClient({
  data,
  filters
}: { 
  data: TeamsClientGroupPropTypes[],
  filters?: FiltersPropTypes
}) {

}