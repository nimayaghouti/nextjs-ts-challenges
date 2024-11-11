import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        inAnimation: {
          "0%": { opacity: "0", visibility: "hidden" },
          "100%": { opacity: "1", visibility: "visible" },
        },
        outAnimation: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
        scaleInAnimation: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        scaleOutAnimation: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.9)" },
        },
      },
      animation: {
        inAnimation: "inAnimation 0.3s ease-in forwards",
        outAnimation: "outAnimation 0.3s ease-out forwards",
        scaleInAnimation: "scaleInAnimation 0.3s ease-in forwards",
        scaleOutAnimation: "scaleOutAnimation 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
