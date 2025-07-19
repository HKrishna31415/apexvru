/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          '50': '#eff8ff',
          '100': '#dff0ff',
          '200': '#bce5ff',
          '300': '#8ad4ff',
          '400': '#52baff',
          '500': '#299bff',
          '600': '#107fff',
          '700': '#006aff',
          '800': '#0058d4',
          '900': '#0049ac',
          '950': '#002c69',
        },
        'brand-gray': {
          '50': '#f7f7f8',
          '100': '#eeeff0',
          '200': '#dce0e3',
          '300': '#c2c8cd',
          '400': '#a7b0b7',
          '500': '#8c97a1',
          '600': '#727e89',
          '700': '#5d6771',
          '800': '#4d545c',
          '900': '#42484f',
          '950': '#0c0f12',
        }
      }
    },
  },
  plugins: [],
}