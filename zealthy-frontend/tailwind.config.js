// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zealthy: {
          dark: '#092635',
          yellow: '#FFD700',
        },
      },
      fontFamily: {
        heading: ['"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
