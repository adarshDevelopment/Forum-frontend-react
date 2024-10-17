/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#DBE4E9',
        'custom-gray-dark': '#E5EBEE',
        'custom-gray-light': '#F6F8F9'
      }
    },
  },
  plugins: [],
}

// rgb(229,235,238)  E5EBEE

// rgb(246,248,249) F6F8F9