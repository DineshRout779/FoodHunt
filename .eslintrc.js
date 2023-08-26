module.exports = {
  parser: 'babel-eslint', // Use babel-eslint parser for parsing modern JavaScript features
  env: {
    browser: true, // Enables browser globals like window and document
    es6: true, // Enables ES6 syntax
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'], // Use recommended rules
  plugins: ['react', 'react-hooks'], // Use React-related plugins
  rules: {
    'max-len': ['error', { code: 80 }], // Adjust the number as needed
  },
};
