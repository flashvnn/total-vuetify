const path = require('path');
module.exports = {
  'transpileDependencies': [
    'vuetify',
  ],
  // disable hashes in filenames
  filenameHashing: false,
  chainWebpack: config => {
    config.entry('app').clear().add('./client/main.js').end()
    config.resolve.alias.set('@', path.join(__dirname, './client'))
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
};