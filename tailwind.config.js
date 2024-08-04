module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'Poppins', 'sans-serif'],
        ref: [ 'Playwrite Chile', 'Poppins', 'italique'],
      },
      colors: {
        primary: {
          light: '#DABDE7',
          DEFAULT: '#F267D2',
          dark: '#0056b3',
          refe: '#80527a',
        },
        secondary: {
          light: '#B92096',
          DEFAULT: '#f18dff',
          dark: '#ECD1F3',
          tht: '#df81b3',
        },
        background: '#f8f9fa',
        text: '#212529',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
