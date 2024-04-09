const globals = require('globals');

const { allExtensions } = require('../utils/extensions');

module.exports = [
  require('../shared/core'),
  ...require('../shared/typescript'),
  require('../shared/react'),
  require('../shared/prettier'),
  {
    name: 'eslint-config-universe/preset/native',
    languageOptions: {
      globals: {
        __DEV__: false,
        Atomics: false,
        ErrorUtils: false,
        FormData: false,
        SharedArrayBuffer: false,
        XMLHttpRequest: false,
        alert: false,
        cancelAnimationFrame: false,
        cancelIdleCallback: false,
        clearImmediate: false,
        clearInterval: false,
        clearTimeout: false,
        fetch: false,
        navigator: false,
        process: false,
        requestAnimationFrame: false,
        requestIdleCallback: false,
        setImmediate: false,
        setInterval: false,
        setTimeout: false,
        window: false,
      },
    },
    settings: {
      'import/extensions': allExtensions,
      'import/resolver': {
        node: { extensions: allExtensions },
      },
    },
  },
  {
    name: 'eslint-config-universe/preset/native',
    files: ['*.web.*'],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
