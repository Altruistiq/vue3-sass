Package.describe({
  name: 'altruistiq:vue3-sass',
  version: '1.0.0',
  summary: 'Add sass and scss support for vue3 components',
  git: 'https://github.com/altruistiq/vue3-sass',
  documentation: 'README.md',
})

Package.registerBuildPlugin({
  name: 'vue3-sass',
  use: [
    'ecmascript@0.12.7',
  ],
  sources: [
    'compiler.js',
  ],
  npmDependencies: {
    'sass': '1.43.4',
    'node-sass-magic-importer': '5.3.2',
  },
})

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0')
})