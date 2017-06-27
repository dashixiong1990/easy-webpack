const merge = require('webpack-merge')
const devServer = require('./modules/devServer')
const loadCSS = require('./modules/loadCSS')

module.exports = merge([
  // webpack devserver
  devServer(),
  loadCSS()
])
