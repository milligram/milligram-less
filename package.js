Package.describe({
  name: 'milligram:milligram-less',
  version: '1.4.1',
  summary: 'A minimalist CSS framework on Less version.',
  git: 'https://github.com/milligram/milligram-less.git',
  documentation: 'readme.md',
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0')
  api.addFiles(['dist/milligram.less'], 'client')
})
