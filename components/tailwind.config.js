/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    // Vite/React source files
    "./src/**/*.{js,ts,jsx,tsx}",

    // Root-level React files that actually contain your UI
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Optional: if you use classes inside these helper files
    "./constants.ts",
    "./types.ts",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        danger: "#EF4444", // Alert Red
        teal: "#14B8A6",   // Muted Teal
        orange: "#F97316", // Safety Orange
        paper: "#F1F5F9",  // Off-White
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1e293b 1px, transparent 1px), " +
          "linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
