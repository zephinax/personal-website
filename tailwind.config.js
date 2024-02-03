/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EAF3FF',
          100: '#CED8E4',
          200: '#B2BECD',
          300: '#94A3B7',
          400: '#7789A2',
          500: '#5D7088',
          600: '#48576B',
          700: '#323E4D',
          800: '#1D2531',
          900: '#040D17'
        }
      },
      zIndex: {
        'modal': 10000,
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
};
