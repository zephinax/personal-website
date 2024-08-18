import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        link: colors.blue[600],
        "link-invert": colors.blue[500],
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
    fontFamily: {
      heading: ["var(--font-body)"],
      body: ["var(--font-body)"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("./src/libs/tailwind/plugins/bg-pattern"),
  ],
} satisfies Config;
