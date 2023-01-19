/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm400: '400px',
        sm450: '450px',
        sm500: '500px',
        sm550: '550px',
        sm600: '600px',
        sm650: '650px',
        sm700: '700px',
        sm750: '750px',
        md800: '800px',
        md850: '850px',
        md900: '900px',
        md950: '950px',
        md1000: '1000px',
        md1050: '1050px',
        lg1100: '1100px',
        lg1150: '1150px',
        lg1200: '1200px',
        lg1250: '1250px',
        lg1300: '1300px',
        lg1350: '1350px',
        xl1400: '1400px',
        xl1450: '1450px',
        xl1500: '1500px',
        xl1550: '1550px',
        xl1600: '1600px',
        xl1650: '1650px',
        xl1700: '1700px',
        xl1750: '1750px',
        xl1800: '1800px',
        xl1850: '1850px',
        xl1900: '1900px',
        xl1950: '1950px',
        xl2000: '2000px',
        xl2050: '2050px',
        xl2100: '2100px',
        xl2150: '2150px',
        xl2200: '2200px',
        xl2250: '2250px',
        xl2300: '2300px',
        xl2350: '2350px',
        xl2400: '2400px',
        xl2450: '2450px',
        xl2500: '2500px',
        xl2550: '2550px',
        xl2600: '2600px',
        xl2650: '2650px',
        xl2700: '2700px',
        xl2750: '2750px',
        xl2800: '2800px',
        xl2850: '2850px',
        xl2900: '2900px',
        xl2950: '2950px',
        xl3000: '3000px',
        xl3050: '3050px',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },

        /*----background colors---*/

        dark: '#222222',
        backgroundColor: '#1C1B37',
        bgPredictions: '#1C1B37',
        pageBg: '#252347',

        /**---- text colors --- */
        sideBarTextColor: 'rgba(255, 255, 255, 0.5)',
        activeSideBarTextColor: '#02FFF0',

        /**--- buttons ---- */
        button: '#6865B5',

        /**--- gradient colors ---- */
        cardGradient1: '#131328',
        cardGradient2: 'rgba(59, 57, 107, 0)',
        cardTitleBox1: '#4A4882',
        cardTitleBox2: '#28274E',
        sliderColor1: '#02FFF0',
        sliderColor2: '#001AFF',
      },
      boxShadow: {
        card: 'inset 6px 6px 6px rgba(255, 255, 255, 0.09), inset -6px -6px 14px rgba(0, 0, 0, 0.45)',
        cardtTitleBox: '0px 0px 26px rgba(0, 0, 0, 0.58)',
        predictions: '0px 4px 20px rgba(132, 132, 132, 0.3)',
      },
      dropShadow: {
        card: '0px 0px 20px rgba(6, 1, 1, 0.5)',
        text: '5px 5px 0px rgba(45, 42, 106, 0.85)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
};
