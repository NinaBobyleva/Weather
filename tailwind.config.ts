/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        main: "1440px",
      },
      fontFamily: {
        'sans': ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
