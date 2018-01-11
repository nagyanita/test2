module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  globals: {
    'cordova': true,
    'DEV': true,
    'PROD': true,
    '__THEME': true
  },
  settings: {
    'import/core-modules': ['quasar'],
    'import/resolver': {
      'webpack': {
        'config': './build/webpack.dev.conf.js'
      }
    }
  },
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': ["error", { "props": false }],
    'no-underscore-dangle': ["error", {
      "allow": ["_id", "_csrf"]
    }]
  }
};
