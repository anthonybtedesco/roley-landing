import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundimg: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        applier: "url('/Applying.png')",
      },
      colors: {
        green: {
          "50": "#f3faf3",
          "100": "#e4f4e4",
          "200": "#c9e9cb",
          "300": "#9fd6a3",
          "400": "#6dbb72",
          "500": "#499e4f",
          "600": "#3b8a41",
          "700": "#2e6732",
          "800": "#29522d",
          "900": "#234426",
          "950": "#0f2412",
        },
        darkblue: {
          "50": "#ecf5ff",
          "100": "#dcedff",
          "200": "#c1dcff",
          "300": "#9bc4ff",
          "400": "#73a1ff",
          "500": "#527eff",
          "600": "#3354f8",
          "700": "#2742db",
          "800": "#233bb0",
          "900": "#24388b",
          "950": "#0d1331",
        },
        hotpink: {
          "50": "#fcf3f7",
          "100": "#fae9f2",
          "200": "#f7d3e4",
          "300": "#f2afcd",
          "400": "#e97dac",
          "500": "#dc4c87",
          "600": "#cc366c",
          "700": "#b02653",
          "800": "#922246",
          "900": "#7a213e",
          "950": "#4a0d20",
        },
      },
    },
  },
  plugins: [],
};
export default config;
