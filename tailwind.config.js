/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        gochi: ["Gochi Hand"]
      },

      colors: {
        green: "#0EF6CC",
        gray: "#3A4F50",
        white: "#F4FEFD",
        dark: "#1B2223",
        textGray:'#64748b'
      },
      screens: {
        '2xl': '1320px',
      },

      animation: {
        'spin-bounce': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}

