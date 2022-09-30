module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: '**/+.*(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        projects: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint', 'prettier'],
  rules: {
    'linebreak-style': 'off',
    'import/newline-after-import': 'off',
    'import/first': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'jsx-dev-runtime': 'off',
    'import/order': 'off',
    'no-underscore-dangle': 'off',
    'spaced-comment': 'off',
    'one-var': 'off',
    'no-undef': 'off',
    'no-var': 'off',
    'no-void': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'prefer-template': 'off',
    'no-useless-concat': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vars-on-top': 'off',
    'no-use-before-define': 'off',
    'import/prefer-defalut-export': 'off',
    'prettier/prettier': [
      'off',
      {
        endOfLine: 'auto',
      },
      {
        usePrettierrc: true,
      },
    ],
  },
};
