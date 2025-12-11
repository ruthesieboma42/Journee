/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx",    "./App/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}