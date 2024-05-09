/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: 'Manrope',
      secondary: 'Shadows Into Light',
      tertiary: 'Covered By Your Grace',
      quad : 'Kaushan Script',
    },
    extend: {},
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  plugins: [],
};

