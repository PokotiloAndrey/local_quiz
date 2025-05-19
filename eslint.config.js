
import js from '@eslint/js';
import airbnb from 'eslint-config-airbnb-base';

export default [
  js.configs.recommended,
  
  ...airbnb,
  
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        jest: true,
        questionsData: 'readonly',
        score: 'readonly'
      }
    },
    rules: {
      'no-console': 'off',
      'import/extensions': ['error', 'always'],
      'no-plusplus': 'off',
      'no-alert': 'off',
      'no-param-reassign': ['error', { props: false }],
      'linebreak-style': 'off',
      'quotes': ['error', 'double'],
      'no-use-before-define': ['error', { functions: false }],
      'no-unused-vars': [
        'error', 
        { varsIgnorePattern: 'questionsData|score' }
      ]
    }
  }
];
