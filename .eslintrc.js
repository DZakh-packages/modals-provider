module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:sonarjs/recommended', 'plugin:prettier/recommended'],
  plugins: ['optimize-regex', 'sonarjs', 'no-loops', 'no-use-extend-native', 'prettier', 'jest'],
  env: {
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  root: true,
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'optimize-regex/optimize-regex': 'error',
    'no-loops/no-loops': 'error',
    'prettier/prettier': 'error',

    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'prefer-rest-params': 'off',
    curly: ['error', 'all'],
    'arrow-body-style': ['error', 'always'],
    'no-implicit-coercion': ['error', { allow: [] }],
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    'no-console': ['error', { allow: ['error'] }],
    'no-restricted-syntax': ['error', 'SequenceExpression'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-fragments': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    // Avoid default export instead
    'import/prefer-default-export': 'off',

    'import/extensions': 'off',
  },
};
