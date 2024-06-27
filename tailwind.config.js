/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasneue: ["Bebas Neue", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
        palanquindark: ["Palanquin Dark", "sans-serif"],
        protestrevolution: ["Protest Revolution", "sans-serif"]
      },
      colors: {
        'theme01': '#EA827D',
        'theme02': '#FFEFD7',
        'theme03': '#B4E4FA',
        'theme04': '#41819F',
        'theme05': '#FFFFFF',
        'theme06': '#C07471',
        'theme07': '#707070',
      },
    },
  },
  plugins: [],
}

