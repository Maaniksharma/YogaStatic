/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0b2640',
        lightBlue: '#3f8fde',
        fadeBlue: '#d3e6f8',
        blueWhite: '#e9f2fb',
        brownRed: '#a11c1c',
        limeGreen: '#a1a11c',
      },
      backgroundImage: {
        heroYogaBoy: 'url(/JumbotronYogaBoy.webp)',
      },
    },
  },
  plugins: [],
};
