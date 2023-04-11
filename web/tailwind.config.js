/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#DCE0E2",
          500: "#434670",
        },
        orange: {
          500: "#F2911B",
        },
        pink: {
          500: "#FE6D8E",
        },
      },
      fontFamily: {
        inter: ["Inter, sans-serif"],
        arial: ["Arial"],
      },
    },
  },
  plugins: [],
};
