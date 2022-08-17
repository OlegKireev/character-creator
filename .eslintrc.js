module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [{
    "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
    rules: {
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      "jsx-a11y/label-has-associated-control": [2, {
        "depth": 3
      }]
    }
  }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
};
