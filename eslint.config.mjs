import { FlatCompat } from '@eslint/eslintrc'
import nextConfig from 'eslint-config-next'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const prettierConfigs = compat.config({
  extends: ['plugin:prettier/recommended'],
})

const tsTypeCheckedConfigs = compat.config({
  extends: ['plugin:@typescript-eslint/recommended'],
})
tsTypeCheckedConfigs.forEach((config) => {
  config.files = ['**/*.ts', '**/*.tsx']
  config.rules = {
    ...config.rules,
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  }
})

const mdxRecommendedConfigs = compat.config({
  extends: ['plugin:mdx/recommended'],
})

const mdxCodeBlockConfigs = compat.config({
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
})
mdxCodeBlockConfigs.forEach((config) => {
  config.files = ['**/*.{md,mdx}/**/*.{js,jsx,ts,tsx}']
})

const eslintConfig = [
  ...nextConfig,
  ...prettierConfigs,
  ...tsTypeCheckedConfigs,
  ...mdxRecommendedConfigs,
  ...mdxCodeBlockConfigs,
  {
    ignores: ['_sl-temp/**'],
  },
  {
    files: ['**/*.md', '**/*.mdx'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'prettier/prettier': 'off',
      'react-hooks/static-components': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
    settings: {
      'mdx/code-blocks': true,
    },
  },
]

export default eslintConfig
