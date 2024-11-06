import React from "react";
import { SidebarPropTypes } from "./types";
import Filter from "../Filter";

export default function Sidebar({
  title,
  sections,
}: Readonly<SidebarPropTypes>) {
  return (
    <aside className="flex flex-col gap-6 min-w-64 py-10 px-2">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-4">
        {sections?.map((section) => (
          <div key={section.id} className="flex flex-col gap-1 w-full">
            <h3>{section.subtitle}</h3>
            {section.options.map((option) => (
              <Filter key={option.concat("-", section.id)} label={option} />
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
