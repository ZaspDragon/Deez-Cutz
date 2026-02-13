import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fff9e6",
          100: "#fff0bf",
          200: "#ffe38a",
          300: "#ffd154",
          400: "#ffbf1f",
          500: "#e6a800",
          600: "#b38300",
          700: "#805d00",
          800: "#4d3800",
          900: "#1a1300",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(230,168,0,.35), 0 10px 25px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
};
export default config;
