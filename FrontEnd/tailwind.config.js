/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f0f0f', // Very dark charcoal/black
        accent: '#FFD700', // Gold
        secondary: '#1f1f1f', // Lighter charcoal
        textGray: '#d1d5db',
        light: '#f9fafb', // Light gray/white for backgrounds
        darkText: '#1f2937', // Dark gray for text on light backgrounds
        goldBg: '#C6A868', // Muted luxury gold/bronze
        cream: '#FDFBF7', // Warm light white/cream
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
