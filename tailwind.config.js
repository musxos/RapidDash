const colors = require('tailwindcss/colors');

module.exports = {
 content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './layouts/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  fontSize: {
   sm: '0.8rem',
   base: '1rem',
   lg: '1.125rem',
   xl: '1.25rem',
   '2xl': '1.563rem',
   '3xl': '1.953rem',
   '4xl': '2.441rem',
   '5xl': '3.052rem',
  },
  colors: {
   ...colors,
   theme: {
    mainColor: 'rgba(47, 56, 87, 0.6)',
    mainbold: 'rgba(47, 56, 87)',
    green: '#70D6BC',
    blueBold: 'rgba(23, 76, 140, 1)',
    blueLight: 'rgba(84, 160, 253, 1)',
   },
  },
 },
 plugins: [],
};
