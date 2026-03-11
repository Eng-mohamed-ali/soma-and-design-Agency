/** @type {import('tailwindcss').Config} */

export default {

  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {

      colors: {
        soma: {
          dark: "#000000",
          card: "#0b0b0b",
          border: "#1f1f1f",
          cyan: "#00E5FF"
        }
      }

    }
  },

  plugins: []

}