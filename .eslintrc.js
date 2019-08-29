const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        schemaJsonFilepath: path.resolve(__dirname, './graphql/schema.json'),
        tagName: 'graphql',
      },
    ],
  },
  plugins: ['graphql'],
};
