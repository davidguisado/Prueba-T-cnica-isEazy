/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'MessageSent': '#0c8cfa',
        'MessageReceived': '#f9f9f8'
      }
    },
  },
  plugins: [],
}