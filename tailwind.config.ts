import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        purple: "#A319B5",
        blue: "#0040CC",
        primary: "#0A005A",
        textSecondary: "#B0B0B0",
        containerSecondary: "#091936",
        containerTernary: "#040F22",
        bgPrimary: "#000717",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
} satisfies Config;
