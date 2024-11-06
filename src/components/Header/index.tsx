"use client";
import React, { useState } from "react";
import Filter from "../Filter";

export default function Header() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const [selected, setSelected] = useState("");
  return (
    <header
      className="flex flex-row justify-between items-center 
      w-full max-w-8xl py-4"
    >
      <h1 className="font-semibold text-2xl text-white">
        Organigrama Nonconformist {currentYear}
      </h1>
      <div className="flex items-center w-fit gap-3">
        <Filter
          label="Banco Galicia"
          onClick={() => {
            console.log("Presionaste el filtro de Galicia");
            setSelected("galicia");
          }}
          selected={selected === "galicia"}
        />
        <Filter
          label="Banco Macro"
          onClick={() => {
            console.log("Presionaste el filtro de Macro");
            setSelected("macro");
          }}
          selected={selected === "macro"}
        />
        <input
          type="search"
          placeholder="Buscar por rol o nombre"
          className="px-4 py-3 text-black-200 rounded-full text-base min-w-64"
        />
      </div>
    </header>
  );
}
