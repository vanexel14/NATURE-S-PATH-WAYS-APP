/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rthin: ["Roboto-Thin", "sans-serif"],
        rextralight: ["Roboto-ExtraLight", "sans-serif"],
        rlight: ["Roboto-Light", "sans-serif"],
        rregular: ["Roboto-Regular", "sans-serif"],
        rmedium: ["Roboto-Medium", "sans-serif"],
        rsemibold: ["Roboto-SemiBold", "sans-serif"],
        rbold: ["Roboto-Bold", "sans-serif"],
        rextrabold: ["Roboto-ExtraBold", "sans-serif"],
        rblack: ["Roboto-Black", "sans-serif"],
      },




    },
  },
  plugins: [],
}

