/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        main: "1440px",
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};
