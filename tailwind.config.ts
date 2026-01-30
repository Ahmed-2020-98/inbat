import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1b4332",
          light: "#a2c95e",
          darker: "#0f281f", // أخضر أغمق للتنويع
          medium: "#2d5a47", // أخضر متوسط
        },
        offWhite: "#fffdfe",
      },
    },
  },
  plugins: [],
};
export default config;
