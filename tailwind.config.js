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
          900: '#040D17',
        },
      },
      zIndex: {
        'modal': 10000,
      },
      keyframes: {
        modalOverlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        modalContentShow: {
          from: {
            opacity: 0,
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
      },
      animation: {
        modalOverlayShow: 'modalOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        modalContentShow: 'modalContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};
