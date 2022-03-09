module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#26C299',
      'blue': '#0A40A1',
      'rose': '#FABFBA',
      'grey': '#333330',
    },
    fontFamily: {
      'header': ['Poppins', 'sans-serif'],
      'body': ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
