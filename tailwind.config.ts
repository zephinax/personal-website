import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["var(--font-body)"],
      body: ["var(--font-body)"],
      mono: ["var(--font-mono)"],
    },
    extend: {
      colors: {
        background: "rgb(var(--chanhdai-background))",
        foreground: "rgb(var(--chanhdai-foreground))",
        card: "rgb(var(--chanhdai-card))",
        "muted-foreground": "rgb(var(--chanhdai-muted-foreground))",
        border: "rgb(var(--chanhdai-border))",
        info: "rgb(var(--chanhdai-info))",
        "info-foreground": "rgb(var(--chanhdai-info-foreground))",
        success: "rgb(var(--chanhdai-success))",
        "success-foreground": "rgb(var(--chanhdai-success-foreground))",
      },
      lineHeight: {
        heading: "1.375",
        body: "1.5",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
