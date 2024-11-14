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
        "py-3 px-6 rounded-sm flex flex-row items-start justify-between hover:bg-neutral-700 w-full border-l-2",
        selected && "border-l-acai-900",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <small
        className={["font-semibold text-xs text-center text-white"]
          .filter(Boolean)
          .join(" ")}
      >
        {label}
      </small>

      <small className="font-semibold text-xs text-center text-white">
        {`>`}
      </small>
    </button>
  );
}
