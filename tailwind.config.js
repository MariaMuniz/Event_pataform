/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {

      backgroundImage: {
        blur: 'url(/src/assets/blur.png)'
      },
      fontFamily: {
        sans: 'Roboto, san-serif',
      },
      color: {
        green: {
          300: '#08837E',
          500: '#08875F',
          700: '#015F43',
        },
        blue: {
          500: '#8108F7'
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68'
        }
      }


    },
  },
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...

  ],
}
