/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'html[class~="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
    }
  },
  theme: {
    extend: {
    },
  },
  plugins: [],
}

