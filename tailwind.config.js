/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '10/4': '10 / 4',
      },
      animation:{
        squish:'squish 200ms ease-in-out'
      },
      keyframes:{
        squish:{
          '50%':{
            transform:'scale(1.4,0.6)'
          }
        }
      }
    },
  },
  plugins: [],
}