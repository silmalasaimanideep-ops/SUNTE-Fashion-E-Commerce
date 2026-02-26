/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Optional: Custom colors/fonts matching Myntra style
      colors: {
        'myntra-pink': '#ff3f6c',
      },
    },
  },
  plugins: [],
  // Essential fix for your hover transforms
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover'],
      opacity: ['group-hover'],
      backgroundOpacity: ['group-hover'], // If needed for overlays
    },
  },
}
