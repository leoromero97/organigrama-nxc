import React from "react";
import Image from "next/image";
import logoNxC from "@/assets/icons/Logo-NxC.svg";
import { HeaderPropTypes } from "./types";

export default function Header({ rightContent }: Readonly<HeaderPropTypes>) {
  return (
    <header
      className="flex flex-row justify-between items-center 
      w-full max-w-8xl py-4"
    >
      <Image src={logoNxC} alt="Logo Nonconformist" height={32} width={280} />
      <div>{rightContent}</div>
    </header>
  );
}
