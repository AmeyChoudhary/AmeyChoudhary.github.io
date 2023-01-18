/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Mono", 'monospace'],
        Acme:["IBM Plex Mono", 'monospace'],
        Haha:['Cinzel', 'serif']
      }
    }
  },
  plugins: [],
}