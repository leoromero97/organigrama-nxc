import React from "react";
import Image from "next/image";
import logoNxC from "@/assets/icons/Logo-NxC.svg";

export default function Header() {
  return (
    <header
      className="flex flex-row justify-between items-center 
      w-full max-w-8xl py-4"
    >
      <Image src={logoNxC} alt="Logo Nonconformist" height={32} width={280} />
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
