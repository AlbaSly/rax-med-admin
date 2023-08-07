/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C8FAD",
        secondary: "#7BC1B7",
        primaryDarker: "#09728A",
        secondaryDarker: "#629A92",
        secondaryDarker2: '#588A83',
        aux: "#0B87B4",
        auxDarker: "#0979A2",

        success: "#00D989",
        error: "#D90050",
        warning: "#F5D300",

        custom_silver: "#EEEEEE",
        custom_gray: "#DDDDDD",
      }
    },
  },
  plugins: [],
}

