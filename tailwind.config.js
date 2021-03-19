// libraries
const palette = require('@bobthered/tailwindcss-palette-generator');

// exports
module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  theme: {
    extend: {
      colors: palette('#0099ff'),
    },
  },
};
