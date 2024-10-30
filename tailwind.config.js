/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentations/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors:{
        primary: '#491293',
        secondary:{
          DEFAULT: '#B40086',
          100:'#C51297',
          200:'#B31266'
        },
        tertiary: '#EF2967'
      },
      fontFamily:{
        'work-black':['WorkSans-Black','sans-serif'],
        'work-light':['WorkSans-Light','sans-serif'],
        'work-medium':['WorkSans-Medium','sans-serif']
      }

    },
  },
  plugins: [],
}

