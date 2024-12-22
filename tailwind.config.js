/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,tx,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "backImg":"url('./assets/background.jpg')",
      },
      colors:{
        primary:'#1399ba', //buttons,highlights and headings
        secondaryLight: '#8adaeb', // hover state for buttons
        accent: '#63accd', // gradient overlays or borders
        backgroundLight: '#8fb7ce', //background color of soft areas
        backgroundDark: '#224838', // footer or dark background
        neutral: '#6d5c56', // text color for contrast
      }
 
    },
  },
  plugins: [],
}