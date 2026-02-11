/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        primary: "#fafafa",
        secondary: "#a1a1aa",
        accent: "#FACC15",
        highlight: "#18181b",
        success: "#4ade80",
        muted: "#27272a",
        "muted-foreground": "#71717a",
        foreground: "#fafafa",
      },

      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      animation: {
        marquee: "marquee 40s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
