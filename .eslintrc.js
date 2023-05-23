module.exports = {
  extends: [
    '@antfu',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
  ignorePatterns: [
    '!.gitlab-ci.yml', // un-ignore `.gitlab-ci.yml`
  ],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'no-multiple-empty-lines': ['error', { max: 0, maxBOF: 0, maxEOF: 0 }],
        'jsonc/array-bracket-newline': 'error',
        'jsonc/array-element-newline': 'error',
      },
    },
  ],
}
