// initiate plugins
let plugins = [require('tailwindcss')];

// check if in production mode
if (process.env.NODE_ENV === 'production') {
  plugins.push(require('autoprefixer'));
  plugins.push(csnano({ preset: 'default' }));
}

// exports
module.exports = { plugins };
