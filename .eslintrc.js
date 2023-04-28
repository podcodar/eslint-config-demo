module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [ '@podcodar/eslint-config-base' ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },

  'rules': {
    'quotes': ['error', 'single'],
  }
};
