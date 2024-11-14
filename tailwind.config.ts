import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 4px 10px 0px #0000001A",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        acai: {
          DEFAULT: "#B42682",
          900: "#7A215A",
          700: "#B42682",
          600: "#CD359C",
          500: "#DF55B9",
          400: "#EA7CD0",
          300: "#F3AEE3",
          200: "#F7D3F0",
          100: "#FAE9F7",
          50: "#FCF3FB",
        },
        ceibo: {
          700: "#009933",
        },
        ocean: {
          500: "#2970FF",
        },
        acid: {
          500: "#FFFF00",
        },
        muta: {
          100: "#ECE8FF",
          900: "#481A98",
        },
        white: "#F5F5F5",
        black: {
          200: "#222222",
        },
        gray: {
          default: "#BDBDBD",
          100: "#BDBDBD",
          200: "#6D6D6D",
          900: "#0C0C0D",
        },
        macro: {
          50: "#E2EFFD",
          700: "#053575",
          900: "#021B4D",
        },
        galicia: {
          900: "#c85000",
        },
      },
      maxWidth: {
        "8xl": "96rem",
      },
    },
  },
  plugins: [],
};
export default config;
