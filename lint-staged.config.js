module.exports = {
    '**/*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
    '**/*.scss': ['stylelint --fix', 'prettier --write'],
  }