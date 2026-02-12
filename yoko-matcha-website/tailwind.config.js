/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matcha-green': '#7EA400',
        'matcha-light': '#E5CAB1',
        'matcha-cream': '#F1F2AC',
      },
      fontFamily: {
        'paytone': ['"Paytone One"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
