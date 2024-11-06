import React from "react";
import { ChipPropTypes } from "./types";

export default function Chip({
  label,
  variant = "teamOwner",
}: Readonly<ChipPropTypes>) {
  const bgColor = {
    teamOwner: "bg-acid-500",
    spec: "bg-ocean-500",
  };

  const textColor = {
    spec: "text-white",
    teamOwner: "text-black-200",
  };
  return (
    <div
      className={[
        "py-1 px-4 rounded-full flex items-center justify-center w-fit",
        bgColor[variant],
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <small
        className={["font-semibold text-xs  text-center", textColor[variant]]
          .filter(Boolean)
          .join(" ")}
      >
        {label}
      </small>
    </div>
  );
}
