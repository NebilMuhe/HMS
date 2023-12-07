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
        squish:'squish 200ms ease-in-out',
        fade: 'fadeUp 500ms ease-in-out',
        fadeLeft:"fadeLeft 500ms ease-in-out"
      },
     

      // that is actual animation
      // keyframes: theme => ({
      //   fadeOut: {
      //     '0%': { backgroundColor: theme('colors.red.300') },
      //     '100%': { backgroundColor: theme('colors.transparent') },
      //   },
      // }),
      keyframes:{
        squish:{
          '50%':{
            transform:'scale(1.4,0.6)'
          }
        },
        fadeUp: {
          '0%':{
            opacity:0,
            transform:'translateY(30px)'
          },
          '100%': {
            opacity:1,
            transform:'translateY(0px)'
          }
        },

        fadeeft: {
          '0%':{
            opacity:0,
            transform:'-translateX(30px)'
          },
          '100%': {
            opacity:1,
            transform:'-translateX(0px)'
          }
        },
      }
    },
  },
  plugins: [],
}