
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1E1E1E', // Dark background color
        'neumorphic-light': '#2E2E2E', // Light neumorphic color
        'neumorphic-dark': '#141414', // Dark neumorphic color
        'primary': '#4A90E2', // Primary accent color
        'secondary': '#F5A623', // Secondary accent color
      
      },
      boxShadow: {
        'neumorphic': '8px 8px 15px rgba(0, 0, 0, 0.3), -8px -8px 15px rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'neue-haas': ['"Neue Haas Grotesk Display"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

