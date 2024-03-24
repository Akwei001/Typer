/** @type {import('tailwindcss').Config} */
// import { colors } from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // eslint-disable-next-line no-undef
        // primary: colors.yellow-[500],
      }
    },
  },
  plugins: [],
}

