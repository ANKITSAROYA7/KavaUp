/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["poppins"]
      },
      animation:{
        'spin-slow': 'wiggle 30s linear infinite',
      },
      keyframes:{
        wiggle: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-228px * 5))' },
        }
      }
    },
  },
  plugins: [],
}

