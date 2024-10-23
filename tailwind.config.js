/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Spotify-MB': "url('../src/assets/images/bursts-mobile.svg')",
        'Spotify-LG': "url('../src/assets/images/bursts.svg')",
      },             
    },
  },
  plugins: [],
}
