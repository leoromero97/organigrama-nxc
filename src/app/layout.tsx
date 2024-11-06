import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlowFont = Barlow({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nonconformist | Organigrama v2",
  description: "Organigrama empresarial integrado con Notion y desarrollado con NextJS",
  authors: [
    {
      name: "Leonardo Gerbacio Romero",
      url: "https://www.linkedin.com/in/leonardogerbacioromero/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlowFont.className}>{children}</body>
    </html>
  );
}
