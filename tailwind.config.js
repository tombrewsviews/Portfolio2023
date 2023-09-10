const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true,
  mode: 'jit',
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
    },
    extend: {
      fontFamily: {
        'sans': ['Manrope', ...fontFamily.sans],
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
}