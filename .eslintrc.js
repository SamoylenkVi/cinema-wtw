module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  overrides: [
  ],

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['react'],

  settings: {
    react: {
      version: 16,
    },
  },

  rules: {
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
