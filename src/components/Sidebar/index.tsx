import React from "react";
import { SidebarPropTypes } from "./types";

export default function Sidebar({
  title,
  isSelected,
  children
}: Readonly<SidebarPropTypes>) {
  return (
    <aside className="flex flex-col gap-6 min-w-64 py-10 px-2">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </aside>
  );
}
