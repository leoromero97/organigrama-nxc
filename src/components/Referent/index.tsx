import React from "react";
import type { ReferentProTypes } from "./types";

export default function Referent({
  labelType = "teamOwner",
  name,
}: Readonly<ReferentProTypes>) {
  return (
    <div className="flex flex-col items-start justify-center w-fit px-4 py-3 bg-[#F5F5F51A] rounded-xl">
      <small className="text-xs font-medium text-gray">
        {labelType === "teamOwner" ? "Team Owner" : "Lead NxC"}
      </small>
      <span className="text-xs font-semibold text-white">{name}</span>
    </div>
  );
}
