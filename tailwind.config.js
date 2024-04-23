/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /grid-cols-/,
    },
    {
      pattern: /col-span-/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

