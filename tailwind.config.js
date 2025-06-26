/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'appear':{
          from:{
            opacity: 0,
          },
          to:{
            opacity: 1,
          }
        },
        'slide':{
          from:{
            opacity: 0,
            transform: 'translateX(100%)'
          },
          to:{
            opacity: 1,
            transform: 'translateX(0%)'
          }
        }
      },
      animation:{
        'appear':"appear 1s ease-in-out",
        'slide':"slide 2s ease-in-out"
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}
// tailwind.config.js