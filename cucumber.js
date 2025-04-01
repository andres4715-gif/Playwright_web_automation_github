module.exports = {
  default: {
    paths: ['src/features/'],
    require: ['src/step-definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'summary',
      '@cucumber/pretty-formatter',
      'json:reports/cucumber-report.json'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true,
    parallel: 0
  }
};