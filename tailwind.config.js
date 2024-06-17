/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  animation: {
    "slide-in-left": "slide-in-left 0.5s ease-out",
    "slide-in-right": "slide-in-right 0.5s ease-out",
  },
  plugins: [],
}

