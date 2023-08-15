/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Montez: ["Montez", ...defaultTheme.fontFamily.sans],
        SpaceMono: ["Space Mono", ...defaultTheme.fontFamily.sans],
        LilitaOne: ['Lilita One', ...defaultTheme.fontFamily.sans],
        Montaga: ['Montaga', ...defaultTheme.fontFamily.sans],
        Gabriela: ['Gabriela', ...defaultTheme.fontFamily.sans],
        AbrilFatface: ['Abril Fatface', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
