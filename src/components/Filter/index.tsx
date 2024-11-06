import React from "react";
import type { FilterPropTypes } from "./types";

export default function Filter({
  selected,
  label,
  ...props
}: Readonly<FilterPropTypes>) {
  return (
    <button
      className={[
        "py-3 px-6 rounded-full flex items-center justify-center w-fit bg-acai-700 hover:bg-acai-900",
        selected && "bg-acai-900",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <small
        className={["font-semibold text-xs  text-center text-white"]
          .filter(Boolean)
          .join(" ")}
      >
        {label}
      </small>
    </button>
  );
}
