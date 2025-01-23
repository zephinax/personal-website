export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-foreground)",
            a: {
              color: "var(--color-link)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      },
    },
  },
} as const;
