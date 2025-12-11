/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx",    "./App/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        purple: {
          100: '#DBCDF0',
          200 : '9747FF'
        },
        green:{
          100: '#C9E4DF'
        },
        white:{
          100: '#FFFFFF'
        },
        black: {
          100: '#000000'
        },
        orange: {
          100:'#F8D9C4'
        },
        blue: {
          100: '#D9E8FC'
        },
        pink: {
          100: '#F2C6DF'
        },
        yellow:{
          100: '#FAEDCB'
        }
      }
    },
  },
  plugins: [],
}