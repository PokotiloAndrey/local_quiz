import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        questionsData: 'readonly',
        score: 'readonly'
      }
    },
    rules: {
      'quotes': ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'never'],
      
      'no-unused-vars': ['error', { varsIgnorePattern: 'questionsData|score' }],
      'no-redeclare': 'off',

      'no-console': 'warn',
      'no-plusplus': 'off',
      'no-alert': 'off',
      'no-param-reassign': ['error', { props: false }],
      'linebreak-style': 'off',
      'no-use-before-define': ['error', { functions: false }]
    }
  },
  {
    files: ['**/*.test.js', 'jest.*.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];
