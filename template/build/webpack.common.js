const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const loadCSS = require('./modules/loadCSS')
const loadAssets = require('./modules/loadAssets')
{{#lint}}
const lintJavaScript = require('./modules/lintJavascript')
{{/lint}}

const PATHS = {
  src: path.join(__dirname, '../src/main'),
  dest: path.join(__dirname, '../dist')
}

module.exports = merge([
  {
    entry: {
      app: PATHS.src
    },
    output: {
      path: PATHS.dest,
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html')
      })
    ]
  },
  loadCSS(),
  loadAssets(),
  {{#lint}}
  lintJavaScript({ include: PATHS.src }),
  {{/lint}}
])
