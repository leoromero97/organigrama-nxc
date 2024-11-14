import React from "react";
import type { FilterPropTypes } from "./types";
import Icon from "../Icon";

export default function Filter({
  selected,
  label,
  ...props
}: Readonly<FilterPropTypes>) {
  return (
    <button
      className={[
        "py-3 px-6 rounded-sm flex flex-row items-start justify-between hover:bg-neutral-700 w-full border-l-2",
        selected ? "border-l-acai-900" : "border-l-gray-200",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <small
        className={["font-regular text-xs text-center text-white", selected && 'font-semibold text-gray-200']
          .filter(Boolean)
          .join(" ")}
      >
        {label}
      </small>

      <Icon
        icon="IcChevronRight"
        className={[
          "min-h-6 h-6 min-w-6 w-6",
          !selected && "text-gray-200",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </button>
  );
}
