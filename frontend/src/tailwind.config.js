// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bhumiBlue: '#1d4ed8',
        bhumiGreen: '#10b981',
        bhumiYellow: '#facc15',
        bhumiRed: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
