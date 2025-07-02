// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <- make sure this line is there
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ['Marcellus', 'serif','"Open Sans"'],
      },
    },
  },
  plugins: [],
};
