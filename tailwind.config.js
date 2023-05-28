/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./public/*.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
