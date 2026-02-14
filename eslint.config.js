import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  // Ignore build artifacts and config that you don't want linted
  {
    ignores: ['dist/**', '.vite/**', 'node_modules/**', '.yarn/**', '.pnp.*'],
  },

  // Base JS
  js.configs.recommended,

  // TS
  ...tseslint.configs.recommended,

  // App (browser) files
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { react, 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } },
    rules: {
      // React 17+ JSX transform: no React import needed
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // If you're TS-first, prop-types is noise
      'react/prop-types': 'off',
    },
  },

  // Node config files (vite, scripts, etc.)
  {
    files: ['*.{js,cjs,mjs}', 'vite.config.*', 'scripts/**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node,
    },
  },
];
