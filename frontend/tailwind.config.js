/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          950: '#082f49'
        },
        coral: '#ff7b54',
        mint: '#7bdcb5',
        lavender: '#8b7cf6'
      }
    }
  },
  plugins: []
};
