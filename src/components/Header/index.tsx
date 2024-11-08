"use client";
import React from "react";

export default function Header() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <header
      className="flex flex-row justify-between items-center 
      w-full max-w-8xl py-4"
    >
      <h1 className="font-semibold text-2xl text-white">
        Nonconformist {currentYear}
      </h1>
      <div className="flex items-center w-fit gap-3">
        <input
          type="search"
          placeholder="Buscar por rol o nombre"
          className="px-4 py-3 text-black-200 rounded-full text-base min-w-64"
        />
      </div>
    </header>
  );
}
