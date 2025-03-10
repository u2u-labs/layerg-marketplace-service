// import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import nx from '@nx/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

export default tsEslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['**/.eslintrc.old.js', '**/dist/**/*'],
  },
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  // eslint.configs.recommended,
  // ...tsEslint.configs.strictTypeChecked,
  // ...tsEslint.configs.stylisticTypeChecked,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      ['@typescript-eslint']: tsEslint.plugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.node,
        ...globals.jest,
      },

      parser: tsEslint.parser,
      ecmaVersion: 2021,
      sourceType: 'module',

      parserOptions: {
        project: ['tsconfig.base.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      '.nx/',
      '.yarn/',
      '**/jest.config.js',
      '**/node_modules/**',
      '**/dist/**',
      '**/fixtures/**',
      '**/coverage/**',
      '**/build/**',
      '.nx/*',
      '.yarn/*',
      // Files copied as part of the build
      'packages/types/src/generated/**/*.ts',
      // Playground types downloaded from the web
      'packages/website/src/vendor/',
      // see the file header in eslint-base.test.js for more info
      'packages/rule-tester/tests/eslint-base/',
      // '**/.next/**',
      // '**/app/.next/**',
    ],

    rules: {
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],

      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
        },
      ],

      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],

      // Rule old use if need
      // '@typescript-eslint/no-unused-vars': 'warn',
      // '@typescript-eslint/interface-name-prefix': 'off',
      // '@typescript-eslint/explicit-function-return-type': 'off',
      // '@typescript-eslint/explicit-module-boundary-types': 'off',
      // '@typescript-eslint/no-explicit-any': 'off',
      // 'operator-linebreak': 'off',
      // '@typescript-eslint/no-shadow': 'warn',
      // indent: 'off',
      // '@typescript-eslint/indent': 'off',
      // 'max-len': ['warn', 150],

      ...prettierConfig.rules,
    },
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    ...tsEslint.configs.disableTypeChecked,
  },
);
