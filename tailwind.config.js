/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4CAF4F',
        'neutral-silver': '#F5F7FA',
        'neutral-grey': '#717171',
        'neutral-white': '#FFFFFF',
        'neutral-dgrey': '#4D4D4D',
        'tint-t5': '#E8F5E9',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
