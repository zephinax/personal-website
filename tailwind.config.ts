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
      zIndex: {
        modal: "10000",
      },
      keyframes: {
        modalOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        modalContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
      animation: {
        modalOverlayShow:
          "modalOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        modalContentShow:
          "modalContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
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
