import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'plugin:prettier/recommended', 'next/core-web-vitals', 'next/typescript'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'off',
    },
    overrides: [
      {
        files: ['**/*.md', '**/*.mdx'],
        rules: { 'prettier/prettier': 'off' },
      },
      {
        files: ['.tsx', '.ts'],
        extends: 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      },
      {
        files: ['*.mdx'],
        extends: 'plugin:mdx/recommended',
      },
    ],
  }),
]

export default eslintConfig
