/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#110c17", // primary background (dark)
          light: "#f0f0f0", // primary background (light)
          primary: "#7e54de", // main button bg
          secondary: "#141b32", // secondary button bg
        },
      },
      backgroundImage: {
        "title-gradient":
          "linear-gradient(to right, #815ff5, #6965F2, #4C74FC)",
      },
    },
  },
  plugins: [],
};
