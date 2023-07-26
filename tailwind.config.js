/** @type {import{'tailwindcss'}.Config} */
module.exports = {
  content : [
    "./pages/**/*.{js,ts,tsx}", //Tells tailwind to go into these pages and see if it is needed there
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};