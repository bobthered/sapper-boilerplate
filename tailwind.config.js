// imports
const config = require('./site.config.js');

// libraries
const palette = require('@bobthered/tailwindcss-palette-generator');

// exports
module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: palette(config.theme.color.primary),
      fontFamily: {
        overpass: ['overpass', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
    },
  },
};
