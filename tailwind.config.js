// imports
const config = require('./site.config.js');

// libraries
const palette = require('@bobthered/tailwindcss-palette-generator');

// exports
module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  theme: {
    extend: {
      colors: palette(config.theme.color.primary),
    },
  },
};
