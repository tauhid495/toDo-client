/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "darkorange",

          "secondary": "lightgray",

          "accent": "#a8bcff",

          "neutral": "#221424",

          "base-100": "#FCFCFD",

          "info": "#4DC5EA",

          "success": "#22B49C",

          "warning": "yellow",

          "error": "red",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
