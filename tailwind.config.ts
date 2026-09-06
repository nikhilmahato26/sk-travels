import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A192F",
          deep: "#0F2942",
          blue: "#134074",
          royal: "#1D4ED8",
          sky: "#38BDF8",
          mist: "#F0F4F8",
          yellow: "#F59E0B",
          gold: "#EAB308",
          amber: "#D97706",
          yellowLight: "#FEF3C7",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 41, 66, 0.08)",
        card: "0 10px 25px -5px rgba(15, 41, 66, 0.08), 0 8px 10px -6px rgba(15, 41, 66, 0.04)",
        glow: "0 0 25px rgba(245, 158, 11, 0.35)",
        blueGlow: "0 10px 30px -5px rgba(19, 64, 116, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
