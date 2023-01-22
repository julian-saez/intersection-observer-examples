/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      ds: { max: '620px' },
      xl: { min: '620px' }
    },
  },
  plugins: [],
};
