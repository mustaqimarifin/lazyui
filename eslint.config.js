import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: { overrides: { 'react-hooks/exhaustive-deps': 0 } },
  typescript: true,
  rules: {
    'react/no-nested-components': 0,
    'ts/ban-ts-comment': 0,
  },
})
