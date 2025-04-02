module.exports = {
  default: {
    paths: ['src/features/**/*.feature'],
    require: [
      'src/support/world.ts',
      'src/step-definitions/**/*.ts'
    ],
    timeout: 600000,
    requireModule: [
      'ts-node/register',
    ],
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
